import { GenericController } from 'src/generics/generic.controller';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Image } from './images.entity';
import { ImageService } from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { renameImage, fileFilter } from './helpers/image.helper';


@Controller('images')
@ApiTags('Images')
export class ImageController extends GenericController<Image, ImageService> {
  constructor(private readonly imageService: ImageService) {
    super(imageService);
  }

  // @Post(':id')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './uploads/images/',
  //       filename: (req, file, cb) => {
  //         cb(null, file.originalname); //default file name
  //       },
  //     }),
  //   }),
  // )
  // uploadeImage(
  //   @UploadedFile() image: Express.Multer.File,
  //   @Param('id', ParseIntPipe) comboId: number,
  // ) {
  //   const newImage = new CreateImageDto();
  //   newImage.comboId = comboId;
  //   newImage.path = image.path;

  //   return this.imageService.create(newImage);
  // }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/images',
      filename: renameImage
    }),
    fileFilter: fileFilter
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);

  }

}
