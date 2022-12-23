import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuarnicionController } from './guarnicion.controller';
import { Guarnicion } from './guarnicion.entity';
import { GuarnicionService } from './guarnicion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Guarnicion])],
  controllers: [GuarnicionController],
  providers: [GuarnicionService],
})
export class GuarnicionModule {}
