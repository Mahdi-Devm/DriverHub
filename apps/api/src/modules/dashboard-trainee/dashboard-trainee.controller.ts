import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardTraineeService } from './dashboard-trainee.service';
import { CreateDashboardTraineeDto } from './dto/create-dashboard-trainee.dto';
import { UpdateDashboardTraineeDto } from './dto/update-dashboard-trainee.dto';

@Controller('dashboard-trainee')
export class DashboardTraineeController {
  constructor(private readonly dashboardTraineeService: DashboardTraineeService) {}

  @Post()
  create(@Body() createDashboardTraineeDto: CreateDashboardTraineeDto) {
    return this.dashboardTraineeService.create(createDashboardTraineeDto);
  }

  @Get()
  findAll() {
    return this.dashboardTraineeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardTraineeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardTraineeDto: UpdateDashboardTraineeDto) {
    return this.dashboardTraineeService.update(+id, updateDashboardTraineeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardTraineeService.remove(+id);
  }
}
