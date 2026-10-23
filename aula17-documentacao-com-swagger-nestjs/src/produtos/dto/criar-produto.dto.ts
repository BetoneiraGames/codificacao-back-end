import { ApiProperty } from "@nestjs/swagger";

export class CriarProdutoDto {
    @ApiProperty({
        example: 'Paste de dente Sorriso',
        description: 'Nome comercial do produto cadastrado',
    })
    nome: string;

    @ApiProperty({
        example: 5.99,
        description: 'Preço unitário de venda',
    })
    preco: number;

    @ApiProperty({
        example: 'higiênico',
        description: 'Categoria a qual o produto pertence',
    })
    categaria: string;
    

}