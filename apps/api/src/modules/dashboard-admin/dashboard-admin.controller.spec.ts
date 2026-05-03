import { Test, TestingModule } from '@nestjs/testing';
import { DashboardAdminController } from './dashboard-admin.controller';
import { DashboardAdminService } from './dashboard-admin.service';

describe('DashboardAdminController', () => {
  let controller: DashboardAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardAdminController],
      providers: [DashboardAdminService],
    }).compile();

    controller = module.get<DashboardAdminController>(DashboardAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
