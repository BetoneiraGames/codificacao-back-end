# 📚 API de Livros — NestJS

Mini projeto desenvolvido com **NestJS** e **TypeScript** para praticar a criação de uma API REST, organização entre **Controllers** e **Services**, parâmetros de rota, validação de dados e tratamento de exceções.

## 🚀 Sobre o projeto

A aplicação possui duas funcionalidades principais:

- **Status da aplicação**, para verificar se o servidor está ativo.
- **Consulta de livros por ID**, utilizando uma rota dinâmica.

Os livros são mantidos em memória no `LivrosService`, sem utilização de banco de dados nesta versão.

---

## ✨ Funcionalidades

### ❤️ Status do servidor

Endpoint responsável por verificar se a aplicação está funcionando:

```http
GET /status
```

Resposta:

```text
Status: Servidor Ativo
```

A rota é implementada pelo `AppController` e utiliza o `AppService` para retornar a mensagem de status.

---

### 📖 Buscar livro por ID

Endpoint responsável por consultar um livro específico:

```http
GET /livros/:id
```

Exemplo:

```http
GET http://localhost:3000/livros/1
```

Resposta:

```json
{
  "id": 1,
  "title": "O Senhor dos Anéis",
  "autor": "J.R.R Tolkien"
}
```

O `LivrosController` utiliza o `ParseIntPipe` para tratar o parâmetro `id` recebido pela URL.

---

## 📚 Livros disponíveis

O `LivrosService` possui atualmente os seguintes livros:

| ID | Título | Autor |
|---:|---|---|
| 1 | O Senhor dos Anéis | J.R.R Tolkien |
| 2 | 1984 | George Orwell |
| 3 | Dom Casmurro | Machado de Assis |
| 4 | Memórias Póstumas de Brás Cubas | Machado de Assis |
| 5 | Capitães de Areia | Jorge Amado |

> Os dados são armazenados em memória. Portanto, nesta versão não existe persistência em banco de dados.

---

## ❌ Tratamento de erros

Quando o ID informado não corresponde a nenhum livro do acervo, o `LivrosService` lança uma `NotFoundException`.

Exemplo:

```http
GET http://localhost:3000/livros/99
```

A mensagem configurada na aplicação é:

```text
Livro com ID 99 não localizado em nosso acervo.
```

Nesse caso, o NestJS retorna uma resposta HTTP:

```text
404 Not Found
```

---

## 🔌 Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/status` | Verifica se o servidor está ativo |
| `GET` | `/livros/:id` | Busca um livro pelo ID |

### Exemplos

**Verificar status:**

```http
GET http://localhost:3000/status
```

**Buscar o livro de ID 1:**

```http
GET http://localhost:3000/livros/1
```

**Buscar o livro de ID 3:**

```http
GET http://localhost:3000/livros/3
```

**Buscar um livro inexistente:**

```http
GET http://localhost:3000/livros/99
```

---

## 🧱 Estrutura principal

```text
src/
├── app.controller.ts
├── app.controller.spec.ts
├── app.module.ts
├── app.service.ts
├── livros.controller.ts
└── livros.service.ts
```

### `app.controller.ts`

Responsável pela rota:

```text
GET /status
```

O Controller recebe a requisição e chama o `AppService`.

### `app.service.ts`

Possui o método `getHello()`, que atualmente retorna:

```text
Status: Servidor Ativo
```

### `livros.controller.ts`

Responsável pela rota:

```text
GET /livros/:id
```

O ID é recebido através do parâmetro da URL e tratado com `ParseIntPipe` antes de ser enviado ao Service.

### `livros.service.ts`

Responsável pelo acervo de livros e pela busca através do método:

```typescript
findById(id: number)
```

Caso o livro não seja encontrado, uma `NotFoundException` é lançada.

### `app.module.ts`

É o módulo principal da aplicação e registra:

- `AppController`
- `LivrosController`
- `AppService`
- `LivrosService`

O projeto também possui a configuração do módulo de observabilidade do **NestJS Observe**.

---

## 🧪 Testes

O projeto possui configuração para testes utilizando o sistema de testes do NestJS.

### Teste unitário

O arquivo `app.controller.spec.ts` contém um teste para o `AppController`.

A expectativa deve estar de acordo com a implementação atual do `AppService`:

```typescript
expect(appController.getHello()).toBe('Status: Servidor Ativo');
```

Caso o teste ainda esteja configurado para esperar:

```text
Hello World!
```

ele deverá ser atualizado, pois a mensagem atual do serviço é:

```text
Status: Servidor Ativo
```

### Executar testes unitários

```bash
npm run test
```

### Executar testes end-to-end

```bash
npm run test:e2e
```

### Verificar cobertura

```bash
npm run test:cov
```

---

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Jest**
- **NestJS Testing**
- **NestJS Observe**

---

## 📦 Instalação

Clone este repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a aplicação

### Modo normal

```bash
npm run start
```

### Modo desenvolvimento

```bash
npm run start:dev
```

O modo `start:dev` permite acompanhar as alterações durante o desenvolvimento.

### Modo produção

```bash
npm run start:prod
```

Depois de iniciar o projeto, a API estará disponível por padrão em:

```text
http://localhost:3000
```

---

## 🔍 Exemplos de respostas

### Status

**Requisição:**

```http
GET /status
```

**Resposta:**

```text
Status: Servidor Ativo
```

### Livro encontrado

**Requisição:**

```http
GET /livros/2
```

**Resposta:**

```json
{
  "id": 2,
  "title": "1984",
  "autor": "George Orwell"
}
```

### Livro não encontrado

**Requisição:**

```http
GET /livros/99
```

**Resultado:**

```text
404 Not Found
```

**Mensagem:**

```text
Livro com ID 99 não localizado em nosso acervo.
```

---

## 👀 Observabilidade

O projeto possui a criação do módulo de observabilidade do **NestJS Observe** no `AppModule`.

Essa configuração permite preparar a aplicação para recursos de observabilidade, como acompanhamento de requisições, métricas, logs e rastreamento.

A configuração atual do projeto cria o módulo através de:

```typescript
createObserveModule()
```

---

## 📌 Observações

- O projeto é um mini projeto de estudo com NestJS.
- Os livros ficam armazenados diretamente no `LivrosService`.
- Não há banco de dados nesta versão.
- A consulta de livros é feita pelo ID.
- O parâmetro `id` utiliza `ParseIntPipe`.
- IDs inexistentes geram `NotFoundException`.
- O endpoint `/status` retorna `Status: Servidor Ativo`.
- O projeto possui configuração para testes unitários e end-to-end.
- O `AppModule` registra os Controllers e Services utilizados pela aplicação.

---

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar conceitos fundamentais do **NestJS**, incluindo:

- criação de Controllers;
- criação de Services;
- injeção de dependências;
- criação de rotas HTTP;
- parâmetros de rota;
- `ParseIntPipe`;
- `NotFoundException`;
- organização modular;
- testes;
- observabilidade.

---

## 👨‍💻 Autor

Mini projeto desenvolvido para estudos e prática de desenvolvimento de APIs REST com **NestJS + TypeScript**.
