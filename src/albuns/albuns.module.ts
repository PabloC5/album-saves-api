import { Module } from '@nestjs/common';
import { AlbunsController } from './albuns.controller';
import { AlbunsService } from './albuns.service';

@Module({
  controllers: [AlbunsController],
  providers: [AlbunsService]
})
export class AlbunsModule {}
