import { IsString, IsInt, IsNotEmpty, IsArray, Min, ArrayMinSize } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAlunoDto {

    @ApiProperty({
        example: 'João da Silva',
        description: 'Nome Completo do aluno',
    })
    @IsString()
    @IsNotEmpty({
        message: 'O nome é obrigatório e não pode ser vazio'
    })
    nome: string;

      @ApiProperty({
        example: 21,
        description: 'Idade do aluno',
    })
    @IsInt({
        message: 'A idade deve ser um numero inteiro'
    })
    @Min(0,{
        message: 'A idade não o pode ser negativa.'
    })
    idade: number;

      @ApiProperty({
        example: '1234',
        description: 'Matricula do Aluno',
    })
    @IsString()
    
    @IsNotEmpty({
        message: 'A matricula é obrigatória e não pode ser vazia.'
    })
    matricula: string;

      @ApiProperty({
        example:['Ciência da Computação', 'Recursos Humanos'],
        description:'Cursos que o aluno está matriculado',
    })
    @IsArray()
    @IsString({
        each: true,
        message: 'Cada curso deve ter um texto'
    })
    @ArrayMinSize(1,{
        message: 'O aluno deve ser matriculado em pelo menos 1 curso'
    })
    cursos: string[];
    
}