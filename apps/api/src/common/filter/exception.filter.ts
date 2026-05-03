import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errors: any = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message = exception.message;
      errors = typeof res === 'object' ? res['message'] : null;
    } else if (exception instanceof QueryFailedError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Database error occurred';
    } else if (exception instanceof Error) {
      message = exception.message;

      if (message.includes('Primary column')) {
        status = HttpStatus.INTERNAL_SERVER_ERROR;
        message = 'خطای ساختار دیتابیس - لطفاً با پشتیبانی تماس بگیرید';
        errors = 'Entity primary column missing';
      }
    }

    this.logger.error({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message,
      errors,
      stack: exception instanceof Error ? exception.stack : null,
    });

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      errors: Array.isArray(errors) ? errors : errors ? [errors] : null,
    });
  }
}
