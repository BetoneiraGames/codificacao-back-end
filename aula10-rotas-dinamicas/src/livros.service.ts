import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class LivrosService {
    private livros =[
        {id: 1, title: 'O Senhor dos Anéis', autor: 'J.R.R Tolkien'},
        {id: 2, title: '1984', autor: 'George Orwell'},
        {id: 3, title: 'Dom Casmurro', autor: 'Machado de Assis'},
        {id: 4, title: 'Memórias Póstumas de Brás Cubas', autor: 'Machado de Assis'},
        {id: 5, title: 'Capitães de Areia', autor: 'Jorge Amado'},
    ];

    findById(id: number){
        const livro = this.livros.find((livro) => livro.id === id);
            if(!livro){
                throw new NotFoundException(`Livro com ID ${id} não localizado em nosso acervo.`);
            }
            return livro;
    }
}