import { DynamicModule, Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REDIS_PROVIDER } from '@shared/constants/redis.constants';
import { createClient } from 'redis';

@Module({
  providers: [ConfigService],
})
export class RedisModule {
  static forRootAsync(): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          inject: [ConfigService],
          provide: REDIS_PROVIDER,
          useFactory: async (configService: ConfigService) => {
            Logger.log('🟢 Initializing Redis Module', 'RedisModule');

            const client = createClient({
              socket: {
                host: configService.get<string>('REDIS_HOST'),
                port: configService.get<number>('REDIS_PORT'),
              },
            });

            client.on('error', (err) => {
              Logger.error(
                'Redis connection Error: ' + err.message,
                'Redis Module',
              );
            });

            client.on('connect', () => {
              Logger.log('✅ Redis client connected', 'Redis Module');
            });

            await client.connect();

            Logger.log('✅ Redis Module initialized', 'Redis Module');

            return client;
          },
        },
      ],
      exports: [REDIS_PROVIDER],
      global: true,
    };
  }
}
