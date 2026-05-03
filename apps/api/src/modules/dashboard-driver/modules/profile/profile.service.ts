import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from '@shared/services/file.service';
import { Repository } from 'typeorm';
import { CreateBasicProfileDto } from './dto/create-profile.dto';
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
      isProfileComplete: true,
    });
    const savedProfile = await this.profileRepository.save(profile);

    return {
      message: 'پروفایل با موفقیت ذخیره شد',
      data: savedProfile,
    };
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
