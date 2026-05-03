import { User } from '@core/user/entities/auth.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '@shared/@types/jwt-payload.type';
import { CacheService } from '@shared/services/cache.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly cacheService: CacheService,
  ) {}

  async generateTokens(
    user: User,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const payload = { sub: user.id, role: user.role };

    const accessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_ACCESS_SECRET') as string,
      expiresIn: parseInt(
        this.configService.get('JWT_ACCESS_EXPIRY_SECONDS', '900'),
        10,
      ),
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET') as string,
      expiresIn: parseInt(
        this.configService.get('JWT_REFRESH_EXPIRY_SECONDS', '1296000'),
        10,
      ),
    });

    const ttl = this.configService.get<number>(
      'JWT_REFRESH_EXPIRY_SECONDS',
      1296000,
    );
    await this.cacheService.set(`refresh:${user.id}`, refreshToken, ttl);

    return { accessToken, refreshToken };
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const SToken = await this.cacheService.get(`refresh:${payload.sub}`);
      if (!SToken || SToken !== refreshToken) {
        throw new UnauthorizedException('رفرش توکن نامعتبر است');
      }

      await this.cacheService.del(`refresh:${payload.sub}`);

      const user = { id: payload.sub, role: payload.role } as User;
      const token = await this.generateTokens(user);

      return token;
    } catch {
      throw new UnauthorizedException('رفرش توکن منقضی شده است');
    }
  }

  async revokeRefreshToken(userId: string): Promise<void> {
    await this.cacheService.del(`refresh:${userId}`);
  }

  async validateRefreshToken(refreshToken: string): Promise<JwtPayload> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      });

      const SToken = await this.cacheService.get(`refresh:${payload.sub}`);
      if (!SToken || SToken !== refreshToken) {
        throw new UnauthorizedException('رفرش توکن نامعتبر است');
      }

      return payload;
    } catch {
      throw new UnauthorizedException('رفرش توکن نامعتبر است');
    }
  }
}
