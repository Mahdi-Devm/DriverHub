import { PartialType } from '@nestjs/swagger';
import { CreateDashboardTraineeDto } from './create-dashboard-trainee.dto';

export class UpdateDashboardTraineeDto extends PartialType(CreateDashboardTraineeDto) {}
