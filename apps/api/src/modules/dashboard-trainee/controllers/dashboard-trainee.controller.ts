import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { RolesDecorator } from '@shared/decorators/roles.decorator';
import { SkipTraineeProfileCheck } from '@shared/decorators/skip-profile-trainee.decorator';
import { UserInfo } from '@shared/decorators/user.decorator';
import { Roles } from '@shared/enums/role.enum';
import { CreateDashboardTraineeDto } from '../dto/create-dashboard-trainee.dto';
import { UpdateDashboardTraineeDto } from '../dto/update-dashboard-trainee.dto';
import { DashboardTraineeService } from '../services/dashboard-trainee.service';

@Controller('dashboard-trainee')
@RolesDecorator(Roles.TRAINEE)
export class DashboardTraineeController {
  constructor(
    private readonly dashboardTraineeService: DashboardTraineeService,
  ) {}

  @Post('profile')
  @SkipTraineeProfileCheck()
  async createProfile(
    @Body() createDto: CreateDashboardTraineeDto,
    @UserInfo('id') userId: string,
  ) {
    return this.dashboardTraineeService.createProfile(createDto, userId);
  }

  @Get('profile')
  async getProfile(@UserInfo('id') userId: string) {
    return this.dashboardTraineeService.getProfile(userId);
  }

  @Put('profile')
  async updateProfile(
    @UserInfo('id') userId: string,
    @Body() updateDto: UpdateDashboardTraineeDto,
  ) {
    return this.dashboardTraineeService.updateProfile(userId, updateDto);
  }
}
