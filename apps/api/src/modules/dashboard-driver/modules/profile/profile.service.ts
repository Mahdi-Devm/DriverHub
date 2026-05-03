import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from '@shared/services/file.service';
import { Repository } from 'typeorm';
import {
  CreateBasicProfileDto,
  CreateCompletProfileDto,
} from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileDriver } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    private readonly fileService: FileService,
    @InjectRepository(ProfileDriver)
    private profileRepository: Repository<ProfileDriver>,
  ) {}
  async createProfile(
    createBasicProfile: CreateBasicProfileDto,
    userId: string,
    file: Express.Multer.File,
  ) {
    let certificateUrl: string | undefined;

    if (file) {
      const uploadLicense = await this.fileService.uploadFile(file);
      certificateUrl = uploadLicense.url;
    }
    const profile = this.profileRepository.create({
      user: { id: userId },
      fullName: createBasicProfile.fullName,
      gender: createBasicProfile.gender,
      licenseNumber: createBasicProfile.licenseNumber,
      experienceYears: createBasicProfile.experienceYears,
      carModel: createBasicProfile.carModel,
      carColor: createBasicProfile.carColor,
      bankAccountNumber: createBasicProfile.bankAccountNumber,
      certificateUrl: certificateUrl,
    });
    const savedProfile = await this.profileRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت ذخیره شد',
      data: savedProfile,
    };
  }

  async getProfile(userId: string) {
    const profile = await this.profileRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!profile) {
      throw new BadRequestException('پروفایل یافت نشد');
    }

    return profile;
  }
  async completProfile(
    createCompletProfile: CreateCompletProfileDto,
    userId: string,
  ) {
    const { nationalCode } = createCompletProfile;

    const existUser = await this.profileRepository.findOne({
      where: { nationalCode: nationalCode },
    });

    if (existUser) {
      throw new BadRequestException(
        'این کد ملی قبلاً برای پروفایل دیگری ثبت شده است',
      );
    }
    const profile = await this.profileRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!profile) {
      throw new BadRequestException(
        'پروفایل یافت نشد. لطفاً ابتدا اطلاعات اولیه را ثبت کنید',
      );
    }

    if (profile.isProfileComplete) {
      throw new BadRequestException('پروفایل شما قبلاً تکمیل شده است');
    }

    profile.nationalCode = createCompletProfile.nationalCode;
    profile.medicalConditions = createCompletProfile?.medicalConditions || '';
    profile.address = createCompletProfile.address;
    profile.hasGlasses = createCompletProfile.hasGlasses;
    profile.age = createCompletProfile.age;
    profile.isProfileComplete = true;

    const updatedProfile = await this.profileRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت تکمیل شد',
      data: updatedProfile,
    };
  }
  async update(userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.profileRepository.findOne({
      where: { user: { id: userId } },
    });

    if (!profile) {
      throw new BadRequestException('پروفایل یافت نشد');
    }
    Object.assign(profile, updateProfileDto);
    const updatedProfile = await this.profileRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت بروزرسانی شد',
      data: updatedProfile,
    };
  }
}
