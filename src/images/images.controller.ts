import { GenericController } from 'src/generics/generic.controller';
import {
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Image } from './images.entity';
import { ImageService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { renameImage, fileFilter } from './helpers/image.helper';
import { HttpStatus, HttpException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { of } from 'rxjs';


@Controller('images')
@ApiTags('Images')
export class ImageController extends GenericController<Image, ImageService> {
  constructor(private readonly imageService: ImageService) {
    super(imageService);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/images',
      filename: renameImage
    }),
    fileFilter: fileFilter
  }))
  @ApiBody({ type: CreateImageDto, required: true })
  uploadFile(@Body() entity: Image, @UploadedFile() file: Express.Multer.File) {
    console.log(file.filename);
    console.log(file.path);
    console.log(entity);
    entity.path = file.path;
    entity.fileName = file.filename;

    return this.imageService.create(entity);
    // return of({ Path: file.path, fileName: file.filename });
  }

}
