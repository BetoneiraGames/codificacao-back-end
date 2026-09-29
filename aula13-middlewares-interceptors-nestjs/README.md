# Projeto NestJS — Rotas Públicas e Middleware

Projeto desenvolvido com **Node.js, NestJS e TypeScript**, com foco no estudo de rotas HTTP, organização de módulos e utilização de **middleware** para interceptar as requisições da aplicação.

Os endpoints foram preparados para testes utilizando o **Insomnia**.

## 🚀 Sobre o projeto

A aplicação possui duas rotas principais:

- Uma rota pública na raiz (`GET /`);
- Uma rota administrativa (`GET /admin`).

Além das rotas, o `AppModule` configura o `LoggerMiddleware` para ser aplicado a **todas as rotas** da aplicação.

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express**
- **NestJS Observe**
- **Insomnia** para testes das requisições

## 📁 Estrutura do projeto

```text
src/
├── app.controller.ts
├── app.module.ts
└── logger/
    └── logger.middleware.ts
```

> O `app.module.ts` referencia o arquivo `logger/logger.middleware.ts`, que é responsável pelo middleware utilizado na aplicação.

## 🌐 Rotas da aplicação

### Rota pública

**Método:** `GET`

**Endpoint:**

```text
/
```

A rota retorna uma mensagem indicando que a rota pública foi acessada com sucesso, juntamente com a data e hora da requisição.

Exemplo de resposta:

```json
{
  "mensage": "Rota Publica acessada com sucesso",
  "data": "2026-09-29T19:00:00.000Z"
}
```

O campo `data` é gerado no momento em que a requisição é realizada.

### Rota administrativa

**Método:** `GET`

**Endpoint:**

```text
/admin
```

A rota retorna uma mensagem de boas-vindas ao painel administrativo e a data e hora da requisição.

Exemplo:

```json
{
  "mensage": "Bem-Vindo ao painel adminstrativo!",
  "data": "2026-09-29T19:00:00.000Z"
}
```

## 🔄 Middleware

O projeto utiliza um `LoggerMiddleware`, registrado no `AppModule`.

A configuração aplica o middleware utilizando:

```ts
consumer.apply(LoggerMiddleware).forRoutes('*');
```

Isso significa que o middleware é configurado para as rotas da aplicação.

O comportamento interno do middleware deve ser consultado no arquivo:

```text
src/logger/logger.middleware.ts
```

## 🧪 Testes com Insomnia

Os endpoints podem ser testados diretamente pelo **Insomnia**.

### Teste 1 — Rota pública

Crie uma requisição:

```text
GET http://localhost:3000/
```

Resultado esperado:

```text
Status: 200 OK
```

Resposta esperada:

```json
{
  "mensage": "Rota Publica acessada com sucesso",
  "data": "data_da_requisicao"
}
```

### Teste 2 — Rota administrativa

Crie uma requisição:

```text
GET http://localhost:3000/admin
```

Resultado esperado:

```text
Status: 200 OK
```

Resposta esperada:

```json
{
  "mensage": "Bem-Vindo ao painel adminstrativo!",
  "data": "data_da_requisicao"
}
```

## 📊 Resumo dos endpoints

| Método | Endpoint | Descrição | Resultado |
|---|---|---|---|
| GET | `/` | Acessa a rota pública | `200 OK` |
| GET | `/admin` | Acessa a rota administrativa | `200 OK` |

## ⚙️ Instalação

Instale as dependências do projeto:

```bash
npm install
```

## ▶️ Executando o projeto

### Desenvolvimento

```bash
npm run start
```

### Desenvolvimento com atualização automática

```bash
npm run start:dev
```

### Produção

```bash
npm run start:prod
```

Após iniciar a aplicação, utilize o Insomnia para acessar:

```text
http://localhost:3000/
```

ou:

```text
http://localhost:3000/admin
```

## 📊 Observabilidade

O projeto mantém a configuração do **NestJS Observe** por meio de `createObserveModule()` no `AppModule`.

A configuração de observabilidade pode ser utilizada para instrumentação da aplicação conforme o ambiente do projeto.

## 📌 Conceitos praticados

- Criação de aplicações com NestJS;
- Criação de controllers;
- Criação de rotas `GET`;
- Retorno de objetos JSON;
- Geração de data/hora com `new Date()`;
- Criação e aplicação de middleware;
- Aplicação de middleware em todas as rotas;
- Organização de arquivos no projeto;
- Testes de endpoints utilizando o Insomnia;
- Configuração do NestJS Observe.

## 🧪 Testes realizados no Insomnia

| Cenário | Método | URL | Resultado esperado |
|---|---|---|---|
| Rota pública | GET | `http://localhost:3000/` | `200 OK` |
| Painel administrativo | GET | `http://localhost:3000/admin` | `200 OK` |

## 📄 Licença

Projeto desenvolvido para fins de estudo e prática com **Node.js, NestJS, TypeScript, rotas HTTP e middleware**.
