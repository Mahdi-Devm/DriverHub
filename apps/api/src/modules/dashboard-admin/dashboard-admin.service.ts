import { Injectable } from '@nestjs/common';
import { CreateDashboardAdminDto } from './dto/create-dashboard-admin.dto';
import { UpdateDashboardAdminDto } from './dto/update-dashboard-admin.dto';

@Injectable()
export class DashboardAdminService {
  create(createDashboardAdminDto: CreateDashboardAdminDto) {
    return 'This action adds a new dashboardAdmin';
  }

  findAll() {
    return `This action returns all dashboardAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboardAdmin`;
  }

  update(id: number, updateDashboardAdminDto: UpdateDashboardAdminDto) {
    return `This action updates a #${id} dashboardAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboardAdmin`;
  }
}
