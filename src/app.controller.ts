import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import MusicData from './music.dto';
import {Music} from './music.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('music') 
  listMusic(){
    const musicRepo= this.dataSource.getRepository(Music);
    return musicRepo.find();
  }

  @Post('music')
  newMusic(@Body() music:Music){
  
    music.id=undefined;
    const musicRepo=this.dataSource.getRepository(Music);
    musicRepo.save(music);

  }

  @Delete('music/:id')
  deleteMusic(@Param('id') id:number){

    const musicRepo=this.dataSource.getRepository(Music);
    musicRepo.delete(id);

  }


}
