# API NestJS — Middleware e Controle de Acesso

Projeto desenvolvido utilizando **Node.js**, **NestJS** e **NPM**, com o objetivo de praticar a criação de uma API, organização de módulos, controllers e utilização de middleware para registro de requisições e controle de acesso.

## 🚀 Tecnologias utilizadas

- Node.js
- NestJS
- NPM
- TypeScript
- Express

## 📋 Sobre o projeto

A aplicação possui três rotas principais:

- `/` — rota pública
- `/admin` — rota protegida para administradores
- `/secret` — rota protegida para acesso secreto

O projeto utiliza um `LoggerMiddleware`, aplicado globalmente às rotas da aplicação. Esse middleware registra o método HTTP e a rota acessada.

Além do registro das requisições, o middleware verifica headers específicos para controlar o acesso às rotas protegidas.

## 🔐 Controle de acesso

### Rota pública

A rota:

```http
GET /
```

não exige nenhuma chave de acesso e retorna uma mensagem informando que a rota pública foi acessada.

### Rota administrativa

A rota:

```http
GET /admin
```

exige o seguinte header:

```http
api-key-admin: administrator
```

Caso o valor seja diferente de `administrator`, a API retorna:

```http
403 Forbidden
```

com uma mensagem informando que é necessário privilégio de administrador.

### Rota secreta

A rota:

```http
GET /secret
```

exige o header:

```http
api-key-secret: secret
```

Caso o valor esteja incorreto, a API retorna:

```http
403 Forbidden
```

indicando que o acesso foi negado.

## 🗂️ Estrutura principal

```text
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── logger/
    └── logger.middleware.ts
```

### AppController

Responsável pelas rotas da aplicação:

```text
GET /
GET /admin
GET /secret
```

Essas rotas estão definidas no controller principal.

### LoggerMiddleware

Responsável por:

- Registrar método HTTP e rota acessada;
- Verificar o acesso à rota `/admin`;
- Verificar o acesso à rota `/secret`;
- Retornar `403` quando as credenciais não correspondem;
- Permitir a continuação da requisição quando o acesso é autorizado.

### AppModule

O middleware é aplicado a todas as rotas através de:

```typescript
consumer.apply(LoggerMiddleware).forRoutes('*');
```



### AppService

O serviço contém um método que retorna:

```text
Status do Servidor: Ativo
```



## ⚙️ Instalação

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Para iniciar a aplicação em modo de desenvolvimento:

```bash
npm run start:dev
```

Depois, acesse a API através da porta configurada no projeto.

Exemplo:

```text
http://localhost:3000
```

## 🧪 Testando a API

### Rota pública

```http
GET http://localhost:3000/
```

### Rota administrativa

Utilize:

```http
GET http://localhost:3000/admin
```

Com o header:

```http
api-key-admin: administrator
```

### Rota secreta

Utilize:

```http
GET http://localhost:3000/secret
```

Com o header:

```http
api-key-secret: secret
```

## ❌ Teste de acesso negado

Para testar o bloqueio, utilize um valor incorreto.

Exemplo:

```http
api-key-admin: usuario
```

ou:

```http
api-key-secret: usuario
```

A aplicação deverá retornar:

```text
403 Forbidden
```

## 📌 Objetivo

Este projeto foi desenvolvido para praticar conceitos fundamentais do NestJS, incluindo:

- Controllers;
- Services;
- Modules;
- Middleware;
- Rotas HTTP;
- Headers;
- Controle de acesso;
- Status HTTP;
- Organização de uma API REST.

## 👨‍💻 Autor

Projeto desenvolvido para estudos e prática de desenvolvimento backend com **Node.js e NestJS**.