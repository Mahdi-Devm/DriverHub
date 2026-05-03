import { PartialType } from '@nestjs/swagger';
import { CreateDashboardAdminDto } from './create-dashboard-admin.dto';

export class UpdateDashboardAdminDto extends PartialType(CreateDashboardAdminDto) {}
