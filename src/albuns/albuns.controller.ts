import { Controller, Get, Post, Put, Delete, Param, Body, Query, ParseIntPipe, NotFoundException, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { AlbunsService } from './albuns.service';
import { CreateAlbumDto } from 'src/dto/CreateAlbumDto';
import { QueryFilterDto } from 'src/dto/QueryFilterDto';

@Controller('albuns')
export class AlbunsController {
    constructor(private readonly albunService: AlbunsService) {}

    @Get('/admin-super')
    throwHttpExceptionSimple() {
      throw new HttpException('Acesso proibido', HttpStatus.FORBIDDEN);
    }

    @Get()
    findAll(@Query() queryFilter: QueryFilterDto) {
      return this.albunService.findAll(queryFilter.filter, queryFilter.page);
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      if (id == null) {
        throw new NotFoundException('ID não pode ser null');
      }

      return this.albunService.findOne(id);
    }
  
    @Post()
    create(@Body() createAlbumDto: CreateAlbumDto) {
      return this.albunService.create(createAlbumDto);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() update: any) {
      return this.albunService.update(id, update);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.albunService.remove(id);
    }
}
