import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('faces')
export class FacesController {
  @Post()
  create(@Res() res: Response) {
    return res.sendStatus(HttpStatus.CREATED);
  }
}
