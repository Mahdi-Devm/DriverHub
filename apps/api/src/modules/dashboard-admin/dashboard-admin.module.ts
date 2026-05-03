import { Module } from '@nestjs/common';
import { DashboardAdminService } from './dashboard-admin.service';
import { DashboardAdminController } from './dashboard-admin.controller';

@Module({
  controllers: [DashboardAdminController],
  providers: [DashboardAdminService],
})
export class DashboardAdminModule {}
