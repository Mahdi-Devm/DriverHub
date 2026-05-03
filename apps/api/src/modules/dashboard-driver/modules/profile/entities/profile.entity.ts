import { User } from '@core/user/entities/auth.entity';
import { BaseEntity } from '@shared/entities/base.entity';
import { GenderEnum } from '@shared/enums/gender.enum';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class ProfileDriver extends BaseEntity {
  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  fullName: string;

  @Column({ type: 'enum', enum: GenderEnum })
  gender: GenderEnum;

  @Column({ unique: true })
  licenseNumber: string;

  @Column({ default: 0 })
  experienceYears: number;

  @Column({ nullable: true })
  carModel: string;

  @Column({ nullable: true })
  carColor: string;

  @Column({ nullable: true })
  bankAccountNumber: string;

  @Column({ nullable: true })
  certificateUrl: string;

  @Column({ default: false })
  isProfileComplete: boolean;
}
