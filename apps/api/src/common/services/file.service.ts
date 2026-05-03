import { BadRequestException, Global, Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { extname, join } from 'path';

@Global()
@Injectable()
export class FileService {
  private readonly uploadDir = join(process.cwd(), 'uploads');

  constructor() {
    this.ensureUploadDir();
  }

  private async ensureUploadDir() {
    try {
      await fs.access(this.uploadDir);
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true });
    }
  }

  async uploadFile(
    file: Express.Multer.File,
  ): Promise<{ url: string; filename: string }> {
    if (!file) {
      throw new BadRequestException('فایلی آپلود نشده است');
    }

    const allowedMimes = [
      'image/jpeg',
      'image/png',
      'image/jpg',
      'image/webp',
      'application/pdf',
    ];
    if (!allowedMimes.includes(file.mimetype)) {
      throw new BadRequestException('فرمت فایل مجاز نیست');
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new BadRequestException('حجم فایل نباید بیشتر از 5 مگابایت باشد');
    }

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname);
    const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
    const filePath = join(this.uploadDir, filename);

    await fs.writeFile(filePath, file.buffer);

    return {
      url: `/uploads/${filename}`,
      filename: filename,
    };
  }
}
