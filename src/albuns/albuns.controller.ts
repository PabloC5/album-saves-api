import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AlbunsService } from './albuns.service';

@Controller('albuns')
export class AlbunsController {
    constructor(private readonly albunService: AlbunsService) {}

    @Get()
    findAll() {
      return this.albunService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.albunService.findOne(+id);
    }
  
    @Post()
    create(@Body() body: { name_album: string, album_image: string, userId: string}) {
      return this.albunService.create(body);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name_album: string}) {
      return this.albunService.update(+id, body);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.albunService.remove(+id);
    }
}
