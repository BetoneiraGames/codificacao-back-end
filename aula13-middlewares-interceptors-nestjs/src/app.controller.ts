import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  @Get()
  getPublic(){
    return {
      mensage: 'Rota Publica acessada com sucesso',
      data: new Date(),
    }
  } 
  @Get('admin')
  getAdmin(){
    return{
      mensage: 'Bem-Vindo ao painel adminstrativo!',
      data: new Date(),
    }
  }
}
