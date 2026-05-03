import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDashboardTraineeDto } from '../dto/create-dashboard-trainee.dto';
import { UpdateDashboardTraineeDto } from '../dto/update-dashboard-trainee.dto';
import { DashboardTrainee } from '../entities/dashboard-trainee.entity';

@Injectable()
export class DashboardTraineeService {
  constructor(
    @InjectRepository(DashboardTrainee)
    private dashboardTraineeRepository: Repository<DashboardTrainee>,
  ) {}

  async createProfile(createDto: CreateDashboardTraineeDto, userId: string) {
    const existingProfile = await this.dashboardTraineeRepository.findOne({
      where: { nationalCode: createDto.nationalCode },
    });

    if (existingProfile) {
      throw new BadRequestException('این کد ملی قبلاً ثبت شده است');
    }

    const existingUserProfile = await this.dashboardTraineeRepository.findOne({
      where: { user: { id: userId } },
    });

    if (existingUserProfile) {
      throw new BadRequestException('شما قبلاً پروفایل خود را ثبت کرده‌اید');
    }

    const profile = this.dashboardTraineeRepository.create({
      ...createDto,
      user: { id: userId },
      isProfileComplete: true,
    });

    const savedProfile = await this.dashboardTraineeRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت ثبت شد',
      data: savedProfile,
    };
  }

  async getProfile(userId: string) {
    const profile = await this.dashboardTraineeRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!profile) {
      throw new BadRequestException('پروفایل یافت نشد');
    }

    return profile;
  }

  async updateProfile(userId: string, updateDto: UpdateDashboardTraineeDto) {
    const profile = await this.dashboardTraineeRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!profile) {
      throw new BadRequestException('پروفایل یافت نشد');
    }

    Object.assign(profile, updateDto);
    const updatedProfile = await this.dashboardTraineeRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت بروزرسانی شد',
      data: updatedProfile,
    };
  }
}
