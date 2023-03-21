import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Image } from './images.entity';

@Injectable()
export class ImageService extends GenericService<Image> {
  constructor(@InjectRepository(Image) private imageRepo: Repository<Image>) {
    super(imageRepo);
  }

}
