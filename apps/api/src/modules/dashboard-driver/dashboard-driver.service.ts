import { Injectable } from '@nestjs/common';
import { CreateDashboardDriverDto } from './dto/create-dashboard-driver.dto';
import { UpdateDashboardDriverDto } from './dto/update-dashboard-driver.dto';

@Injectable()
export class DashboardDriverService {
  create(createDashboardDriverDto: CreateDashboardDriverDto) {
    return 'This action adds a new dashboardDriver';
  }

  findAll() {
    return `This action returns all dashboardDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboardDriver`;
  }

  update(id: number, updateDashboardDriverDto: UpdateDashboardDriverDto) {
    return `This action updates a #${id} dashboardDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboardDriver`;
  }
}
