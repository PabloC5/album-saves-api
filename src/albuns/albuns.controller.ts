import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { AlbunsService } from './albuns.service';
import { CreateAlbumDto } from 'src/dto/CreateAlbumDto';
import { QueryFilterDto } from 'src/dto/QueryFilterDto';

@Controller('albuns')
export class AlbunsController {
    constructor(private readonly albunService: AlbunsService) {}

    @Get()
    findAll(@Query() queryFilter: QueryFilterDto) {
      return this.albunService.findAll(queryFilter.filter, queryFilter.page);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.albunService.findOne(id);
    }
  
    @Post()
    create(@Body() createAlbumDto: CreateAlbumDto) {
      return this.albunService.create(createAlbumDto);
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
