import { Injectable } from '@nestjs/common';
import { CreateDashboardTraineeDto } from './dto/create-dashboard-trainee.dto';
import { UpdateDashboardTraineeDto } from './dto/update-dashboard-trainee.dto';

@Injectable()
export class DashboardTraineeService {
  create(createDashboardTraineeDto: CreateDashboardTraineeDto) {
    return 'This action adds a new dashboardTrainee';
  }

  findAll() {
    return `This action returns all dashboardTrainee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboardTrainee`;
  }

  update(id: number, updateDashboardTraineeDto: UpdateDashboardTraineeDto) {
    return `This action updates a #${id} dashboardTrainee`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboardTrainee`;
  }
}
