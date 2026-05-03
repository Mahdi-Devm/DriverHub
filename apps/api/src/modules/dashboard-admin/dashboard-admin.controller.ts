import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardAdminService } from './dashboard-admin.service';
import { CreateDashboardAdminDto } from './dto/create-dashboard-admin.dto';
import { UpdateDashboardAdminDto } from './dto/update-dashboard-admin.dto';

@Controller('dashboard-admin')
export class DashboardAdminController {
  constructor(private readonly dashboardAdminService: DashboardAdminService) {}

  @Post()
  create(@Body() createDashboardAdminDto: CreateDashboardAdminDto) {
    return this.dashboardAdminService.create(createDashboardAdminDto);
  }

  @Get()
  findAll() {
    return this.dashboardAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardAdminDto: UpdateDashboardAdminDto) {
    return this.dashboardAdminService.update(+id, updateDashboardAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardAdminService.remove(+id);
  }
}
