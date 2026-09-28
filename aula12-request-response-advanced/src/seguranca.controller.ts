import { Controller, Get, Headers, Res } from "@nestjs/common";
import type { Response } from 'express';
import { timestamp } from "rxjs";

@Controller('secreto')
export class SegurancaController{
    @Get()
    acessarAreaSecreta(@Headers('x-api-key') apiKey: string, @Res() res: Response, ){
        if(apiKey === 'MATHEUS2026'){
            res.setHeader('x-auth-status', 'verificado');
            return res.status(200).json({
                mensagem: 'Acesso concedido ao conteúdo secreto!!',
                timestamp: new Date(),
            });
            
        }
        return res.status(403).json({
            error:'Forbidden',
            mensagem: 'Chave API invalida ou ausente',
        })
    }
}

