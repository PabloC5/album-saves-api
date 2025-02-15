import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AlbunsController } from './albuns.controller';
import { AlbunsService } from './albuns.service';

@Module({
  imports: [PrismaModule],
  controllers: [AlbunsController],
  providers: [AlbunsService]
})
export class AlbunsModule {}
