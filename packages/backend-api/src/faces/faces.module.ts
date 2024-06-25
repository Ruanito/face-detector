import { Module } from '@nestjs/common';
import { FacesService } from './faces.service';
import { FacesController } from './faces.controller';

@Module({
  providers: [FacesService],
  controllers: [FacesController]
})
export class FacesModule {}
