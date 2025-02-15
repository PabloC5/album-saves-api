import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbunsModule } from './albuns/albuns.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AlbunsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
