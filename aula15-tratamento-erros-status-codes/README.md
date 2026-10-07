# 🛒 API de Produtos — NestJS

Projeto desenvolvido utilizando **Node.js**, **NestJS**, **TypeScript** e **NPM**, com o objetivo de praticar a criação de uma API REST, organização de controllers e services, utilização de parâmetros de rota e tratamento de erros.

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- TypeScript
- NPM

## 📋 Sobre o projeto

A aplicação possui uma API para consulta de produtos armazenados em memória.

O projeto possui:

- Controller principal para verificar o status da aplicação;
- Controller de produtos;
- Service de produtos;
- Validação de ID;
- Tratamento de erros HTTP;
- Logs utilizando o `Logger` do NestJS.

Os produtos são armazenados diretamente no `ProdutosService`.

## 📁 Estrutura do projeto

```text
projeto/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.ts
│   └── produtos.service.ts
├── package.json
└── README.md
```

## ⚙️ Funcionamento

### Status da aplicação

A aplicação possui a rota:

```http
GET /status
```

Essa rota utiliza o `AppService` e retorna:

```text
Status ativo
```



## 🛍️ Produtos

A API possui o endpoint:

```http
GET /produtos
```

Esse endpoint retorna a lista de produtos cadastrados no sistema.

Os produtos disponíveis inicialmente são:

| ID | Produto | Preço |
|---:|---|---:|
| 1 | Teclado Mecânico | R$ 199,99 |
| 2 | Mouse Gamer | R$ 99,99 |
| 3 | Monitor 144hz | R$ 899,99 |
| 4 | Headset Gamer | R$ 199,99 |
| 5 | Cadeira Gamer | R$ 499,99 |

Esses dados são definidos no `ProdutosService`.

## 🔎 Buscar produto por ID

Também é possível buscar um produto específico através do ID:

```http
GET /produtos/:id
```

### Exemplo

```http
GET /produtos/1
```

Resposta:

```json
{
  "id": 1,
  "nome": "Teclado Mecânico",
  "preco": 199.99
}
```

O controller converte o parâmetro recebido para número antes de realizar a busca.

## ❌ Tratamento de erros

### ID inválido

Caso seja informado um ID que não seja numérico:

```http
GET /produtos/abc
```

A API retorna um erro `400 Bad Request`:

```text
ID inválido. Deve ser número inteiro
```

O sistema também registra um aviso no log.

### Produto não encontrado

Caso o ID seja numérico, mas não exista na lista:

```http
GET /produtos/99
```

A API retorna:

```text
404 Not Found
```

com a mensagem:

```text
Produto com ID 99 não encontrado
```

Esse caso também gera um aviso no logger da aplicação.

## 📝 Logs

O `ProdutosController` utiliza o `Logger` do NestJS para registrar situações de erro, como:

- Tentativa de busca com ID não numérico;
- Produto não encontrado.



## 💻 Instalação

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Para iniciar em modo de desenvolvimento:

```bash
npm run start:dev
```

A aplicação utiliza a variável de ambiente `PORT`. Caso ela não esteja definida, o servidor utiliza a porta `3000`.

Por padrão:

```text
http://localhost:3000
```

## 🧪 Testando a API

As requisições podem ser realizadas utilizando ferramentas como **Insomnia**, **Postman** ou diretamente pelo navegador para as rotas `GET`.

### Status

```http
GET http://localhost:3000/status
```

### Listar produtos

```http
GET http://localhost:3000/produtos
```

### Buscar produto

```http
GET http://localhost:3000/produtos/1
```

### Testar ID inválido

```http
GET http://localhost:3000/produtos/abc
```

### Testar produto inexistente

```http
GET http://localhost:3000/produtos/99
```

## 📌 Objetivos do projeto

Este projeto foi desenvolvido para praticar:

- Criação de APIs REST com NestJS;
- Controllers;
- Services;
- Modules;
- Rotas HTTP;
- Parâmetros de rota;
- Injeção de dependência;
- Tratamento de exceções;
- Status HTTP;
- Logs;
- Organização de projetos backend.

## 👨‍💻 Autor

Projeto desenvolvido para estudos e prática de desenvolvimento backend com **Node.js e NestJS**.