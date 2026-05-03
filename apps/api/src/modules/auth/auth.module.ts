import { User } from '@core/user/entities/auth.entity';
import { UserService } from '@core/user/user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from '@shared/guards/jwt-strategy.guard';
import { CacheService } from '@shared/services/cache.service';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    TokenService,
    CacheService,
    JwtStrategy,
  ],
})
export class AuthModule {}
