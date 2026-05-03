import { Test, TestingModule } from '@nestjs/testing';
import { DashboardTraineeService } from './dashboard-trainee.service';

describe('DashboardTraineeService', () => {
  let service: DashboardTraineeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardTraineeService],
    }).compile();

    service = module.get<DashboardTraineeService>(DashboardTraineeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
