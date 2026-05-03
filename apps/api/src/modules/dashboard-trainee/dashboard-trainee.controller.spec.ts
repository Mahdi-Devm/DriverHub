import { Test, TestingModule } from '@nestjs/testing';
import { DashboardTraineeController } from './dashboard-trainee.controller';
import { DashboardTraineeService } from './dashboard-trainee.service';

describe('DashboardTraineeController', () => {
  let controller: DashboardTraineeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardTraineeController],
      providers: [DashboardTraineeService],
    }).compile();

    controller = module.get<DashboardTraineeController>(DashboardTraineeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
