import { Test, TestingModule } from '@nestjs/testing';
import { DashboardAdminService } from './dashboard-admin.service';

describe('DashboardAdminService', () => {
  let service: DashboardAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardAdminService],
    }).compile();

    service = module.get<DashboardAdminService>(DashboardAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
