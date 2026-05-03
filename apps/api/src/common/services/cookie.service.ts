import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

export interface CookieOptions {
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
  maxAge?: number;
  path?: string;
  domain?: string;
}

@Injectable()
export class CookieService {
  private readonly defaultOptions: CookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  };

  constructor(private readonly configService: ConfigService) {}

  set(
    res: Response,
    name: string,
    value: string,
    options?: CookieOptions,
  ): void {
    const finalOptions = { ...this.defaultOptions, ...options };
    res.cookie(name, value, finalOptions);
  }

  setRefreshToken(res: Response, token: string, expiresInDays?: number): void {
    const days =
      expiresInDays ||
      this.configService.get<number>('JWT_REFRESH_EXPIRY_SECONDS', 1296000) /
        (24 * 60 * 60);
    this.set(res, 'refreshToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: days * 24 * 60 * 60 * 1000,
      path: '/',
    });
  }

  setAccessToken(
    res: Response,
    token: string,
    expiresInMinutes?: number,
  ): void {
    const minutes =
      expiresInMinutes ||
      this.configService.get<number>('JWT_ACCESS_EXPIRY_SECONDS', 900) / 60;
    this.set(res, 'accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: minutes * 60 * 1000,
      path: '/',
    });
  }

  get(req: any, name: string): string | undefined {
    return req.cookies?.[name];
  }

  getRefreshToken(req: any): string | undefined {
    return this.get(req, 'refreshToken');
  }

  getAccessToken(req: any): string | undefined {
    return this.get(req, 'accessToken');
  }

  clear(res: Response, name: string, options?: CookieOptions): void {
    const finalOptions = { ...this.defaultOptions, ...options, maxAge: 0 };
    res.cookie(name, '', finalOptions);
  }

  clearRefreshToken(res: Response): void {
    this.clear(res, 'refreshToken');
  }

  clearAccessToken(res: Response): void {
    this.clear(res, 'accessToken');
  }

  clearAuthCookies(res: Response): void {
    this.clearRefreshToken(res);
    this.clearAccessToken(res);
  }
}
