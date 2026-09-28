# API NestJS — Controle de Acesso e Área Secreta

Projeto desenvolvido com **Node.js**, **NestJS** e **TypeScript**, com foco no estudo de requisições HTTP, uso de cabeçalhos (`headers`), autenticação simples por **API Key** e respostas HTTP personalizadas.

## 🚀 Sobre o projeto

A aplicação possui um endpoint protegido que permite acessar uma área secreta somente quando a requisição envia uma chave de API válida no cabeçalho `x-api-key`.

O projeto utiliza o **NestJS** como framework para construção da API e foi testado utilizando o **Insomnia**.

A estrutura principal registra o `SegurancaController` no `AppModule` e também mantém a instrumentação do NestJS Observe configurada no projeto.

## 🛠️ Tecnologias utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **Express**
- **RxJS**
- **NestJS Observe**
- **Insomnia** para testes da API

## 📁 Estrutura principal

```text
src/
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── seguranca.controller.ts
```

## 🔐 Endpoint de segurança

### Acessar área secreta

**Método:** `GET`

**Rota:**

```text
/secreto
```

O endpoint recebe a chave de autenticação através do cabeçalho:

```text
x-api-key
```

### 🔑 Chave válida

Para o teste desenvolvido no projeto, a chave esperada é:

```text
MATHEUS2026
```

Quando a chave está correta, a API retorna **HTTP 200** e adiciona o cabeçalho:

```text
x-auth-status: verificado
```

A resposta contém uma mensagem de acesso concedido e um `timestamp`.

Exemplo:

```json
{
  "mensagem": "Acesso concedido ao conteúdo secreto!!",
  "timestamp": "2026-09-28T18:00:00.000Z"
}
```

> O `timestamp` é gerado no momento da requisição.

### ❌ Chave inválida ou ausente

Quando a chave `x-api-key` está incorreta ou não é enviada, a API retorna **HTTP 403 (Forbidden)**.

Exemplo:

```json
{
  "error": "Forbidden",
  "mensagem": "Chave API invalida ou ausente"
}
```

## 🧪 Testes com Insomnia

Os testes da API foram realizados utilizando o **Insomnia**.

### Teste 1 — Acesso autorizado

Crie uma requisição:

```text
GET http://localhost:3000/secreto
```

Na aba **Headers**, adicione:

| Nome | Valor |
|---|---|
| `x-api-key` | `MATHEUS2026` |

Resultado esperado:

```text
Status: 200 OK
```

E o cabeçalho de resposta:

```text
x-auth-status: verificado
```

### Teste 2 — Chave inválida

Utilize:

```text
GET http://localhost:3000/secreto
```

Com o header:

```text
x-api-key: chave-invalida
```

Resultado esperado:

```text
Status: 403 Forbidden
```

### Teste 3 — Chave ausente

Envie a requisição sem o header `x-api-key`:

```text
GET http://localhost:3000/secreto
```

Resultado esperado:

```text
Status: 403 Forbidden
```

## ⚙️ Instalação

```bash
npm install
```

## ▶️ Executando o projeto

### Desenvolvimento

```bash
npm run start
```

### Modo watch

```bash
npm run start:dev
```

### Produção

```bash
npm run start:prod
```

Depois de iniciar a aplicação, utilize:

```text
http://localhost:3000
```

para realizar os testes no Insomnia.

## 📊 Observabilidade

O projeto também possui configuração do **NestJS Observe** no `AppModule`, utilizando `ObserveModule.forRoot()` com identificação do serviço.

As credenciais de observabilidade são configuradas no módulo:

```ts
ObserveModule.forRoot({
  appKey: 'YOUR_APP_KEY',
  appSecret: 'YOUR_APP_SECRET',
  serviceId: 'aula12-request-response-advanced',
})
```

## 📌 Conceitos praticados

- Criação de controllers com NestJS;
- Criação de rotas HTTP;
- Uso de `@Controller()` e `@Get()`;
- Leitura de headers com `@Headers()`;
- Validação de API Key;
- Retorno dos status HTTP `200` e `403`;
- Uso do `@Res()` para controlar a resposta;
- Respostas em formato JSON;
- Inclusão de headers na resposta;
- Geração de timestamp;
- Testes de API com Insomnia;
- Configuração de observabilidade com NestJS Observe.

## 🧪 Resumo dos testes

| Cenário | Método | Rota | Resultado esperado |
|---|---|---|---|
| API Key correta | GET | `/secreto` | `200 OK` |
| API Key incorreta | GET | `/secreto` | `403 Forbidden` |
| API Key ausente | GET | `/secreto` | `403 Forbidden` |

## 📄 Licença

Projeto desenvolvido para fins de estudo e prática com **Node.js, NestJS, TypeScript e APIs REST**.
