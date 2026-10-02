import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const rotaAdmin = req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${rotaAdmin}`);
    if (rotaAdmin.startsWith('/admin')){

      const role = req.headers['api-key-admin'];
      if(role !== 'administrator'){
        return res.status(403).json({
          statusCode: 403,
          message:'Acesso Negado: Privilégio de administrador Necessário.',
          log: new Date(),
        });
      }
    }
    const rotaSecreta = req.originalUrl || req.url;
    console.log(`[LOG] Método: ${req.method} | Rota: ${rotaSecreta}`);
    if (rotaSecreta.startsWith('/secret')){
      const role = req.headers['api-key-secret'];
      if(role !== 'secret'){
        return res.status(403).json({
          statusCode: 403,
          mensagem: 'Acesso negado: Privilegio de secreto necessario.',
          log: new Date(),
        });
      }
    }
    next();
      }


}
