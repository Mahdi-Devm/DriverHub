import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileCompleteGuard } from './guards/profile-complete.guard';
import { ProfileDriver } from './modules/profile/entities/profile.entity';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [ProfileModule, TypeOrmModule.forFeature([ProfileDriver])],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ProfileCompleteGuard,
    },
  ],
})
export class DashboardDriverModule {}
