import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DashboardDriverService } from './dashboard-driver.service';
import { CreateDashboardDriverDto } from './dto/create-dashboard-driver.dto';
import { UpdateDashboardDriverDto } from './dto/update-dashboard-driver.dto';

@Controller('dashboard-driver')
export class DashboardDriverController {
  constructor(
    private readonly dashboardDriverService: DashboardDriverService,
  ) {}

  @Post('create-profile')
  createProfile(@Body() createDashboardDriverDto: CreateDashboardDriverDto) {
    return this.dashboardDriverService.createProfile(createDashboardDriverDto);
  }

  @Get()
  findAll() {
    return this.dashboardDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardDriverService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDashboardDriverDto: UpdateDashboardDriverDto,
  ) {
    return this.dashboardDriverService.update(+id, updateDashboardDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardDriverService.remove(+id);
  }
}
