import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardTraineeController } from './controllers/dashboard-trainee.controller';
import { DashboardTrainee } from './entities/dashboard-trainee.entity';
import { TraineeProfileCompleteGuard } from './guard/trainee-profile-complete.guard';
import { DashboardTraineeService } from './services/dashboard-trainee.service';

@Module({
  imports: [TypeOrmModule.forFeature([DashboardTrainee])],
  controllers: [DashboardTraineeController],
  providers: [
    DashboardTraineeService,
    {
      provide: APP_GUARD,
      useClass: TraineeProfileCompleteGuard,
    },
  ],
})
export class DashboardTraineeModule {}
