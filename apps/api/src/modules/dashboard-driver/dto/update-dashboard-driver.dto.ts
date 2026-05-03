import { PartialType } from '@nestjs/swagger';
import { CreateDashboardDriverDto } from './create-dashboard-driver.dto';

export class UpdateDashboardDriverDto extends PartialType(CreateDashboardDriverDto) {}
