import { Module } from '@nestjs/common';
import { FacesModule } from './faces/faces.module';

@Module({
  imports: [FacesModule],
})
export class AppModule {}
