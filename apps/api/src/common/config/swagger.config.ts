import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function initSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('driverHub api')
    .setVersion('1.0.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build();
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'snap backend',
    customCss: '.swagger-ui .topbar { background-color: #2c3e50; }',
    swaggerOptions: {
      persistAuthorization: true,
      filter: true,
    },
  };
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document, customOptions);
}
