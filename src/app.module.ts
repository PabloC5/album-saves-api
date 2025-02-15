import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbunsModule } from './albuns/albuns.module';

@Module({
  imports: [AlbunsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
