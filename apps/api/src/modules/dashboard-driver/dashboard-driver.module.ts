import { Module } from '@nestjs/common';
import { DashboardDriverService } from './dashboard-driver.service';
import { DashboardDriverController } from './dashboard-driver.controller';

@Module({
  controllers: [DashboardDriverController],
  providers: [DashboardDriverService],
})
export class DashboardDriverModule {}
