import { Module } from '@nestjs/common';
import { DashboardTraineeService } from './dashboard-trainee.service';
import { DashboardTraineeController } from './dashboard-trainee.controller';

@Module({
  controllers: [DashboardTraineeController],
  providers: [DashboardTraineeService],
})
export class DashboardTraineeModule {}
