# 📁 API de Upload de Mídia — NestJS

Mini projeto desenvolvido com **Node.js, NestJS e TypeScript** para praticar upload de arquivos através de uma API REST.

A aplicação recebe arquivos de imagem usando `multipart/form-data`, valida o formato e o tamanho, gera um nome único e salva o arquivo localmente na pasta `./uploads`.

Os testes da API podem ser realizados pelo **Insomnia**.

## 🚀 Funcionalidades

- 📤 Upload de arquivos;
- 🖼️ Suporte a `jpg`, `jpeg`, `png`, `gif` e `webp`;
- 📏 Limite máximo de **2 MB**;
- 🔐 Nome único utilizando `UUID`;
- 📂 Armazenamento em `./uploads`;
- ❌ Validação de formato;
- ❌ Validação quando nenhum arquivo é enviado.

## 🛠️ Tecnologias

- **Node.js**
- **NestJS**
- **TypeScript**
- **Multer**
- **UUID**
- **Insomnia**

## 📤 Endpoint de upload

```http
POST /midia/upload
```

URL:

```text
http://localhost:3000/midia/upload
```

O campo do formulário deve ser:

```text
arquivo
```

O Controller utiliza `FileInterceptor` e `diskStorage` do Multer para receber e armazenar o arquivo. O nome é gerado com UUID e a extensão original é preservada. fileciteturn3file1L1-L5 fileciteturn3file1L8-L20

## 🧪 Testando no Insomnia

1. Crie uma requisição `POST`.
2. Informe `http://localhost:3000/midia/upload`.
3. Acesse **Body → Multipart Form**.
4. Crie o campo `arquivo`.
5. Selecione o tipo **File**.
6. Escolha uma imagem.
7. Clique em **Send**.

Exemplo:

```text
POST http://localhost:3000/midia/upload

Multipart Form
arquivo = minha-imagem.png
```

Se o arquivo for válido, ele será salvo em:

```text
./uploads
```

## 📦 Resposta

O Controller retorna informações do arquivo enviado:

```json
{
  "filename": "arquivo",
  "size": 123456,
  "url": "http://localhost:3000/api/uploads/nome-do-arquivo.png"
}
```

A URL é montada pelo Controller no formato:

```text
http://localhost:3000/api/uploads/{nome-do-arquivo}
```

## 🖼️ Formatos permitidos

A validação aceita:

```text
.jpg
.jpeg
.png
.gif
.webp
```

A validação é feita pelo `fileFilter` do Multer. fileciteturn3file1L20-L30

> A mensagem de erro existente no código contém `jpn`, mas o filtro implementado aceita `jpg`, `jpeg`, `png`, `gif` e `webp`.

## 📏 Limite de tamanho

O limite configurado é de **2 MB**:

```typescript
limits: {
  fileSize: 2 * 1024 * 1024,
}
```

fileciteturn3file1L20-L22

## ❌ Tratamento de erros

### Nenhum arquivo enviado

Se nenhum arquivo for enviado:

```text
400 Bad Request
```

Mensagem:

```text
Nenhum arquivo enviado.
```

Esse tratamento está implementado com `BadRequestException`. fileciteturn3file1L34-L37

### Formato não permitido

Arquivos que não sejam `jpg`, `jpeg`, `png`, `gif` ou `webp` são rejeitados pelo filtro.

### Arquivo acima de 2 MB

Arquivos maiores que o limite configurado são rejeitados pelo Multer.

## 📂 Estrutura

```text
src/
├── app.module.ts
├── midia.controller.ts
└── midia.module.ts
```

O `MidiaController` possui a rota `POST /midia/upload`. fileciteturn3file1L8-L10

O `MidiaModule` registra o `MidiaController`. fileciteturn3file2L1-L6

O `AppModule` também registra o `MidiaController` e possui a configuração do NestJS Observe. fileciteturn3file0L1-L5 fileciteturn3file0L9-L14

## 🔐 Nome dos arquivos

O projeto utiliza UUID para evitar conflitos de nomes:

```typescript
const nomeUnico = `${uuidv4()}${extname(file.originalname)}`;
```

Por exemplo:

```text
foto.png
```

pode ser armazenado como:

```text
550e8400-e29b-41d4-a716-446655440000.png
```

## 🔎 Testes no Insomnia

### Teste 1 — Upload válido

```http
POST http://localhost:3000/midia/upload
```

Body:

```text
Multipart Form
arquivo = imagem.png
```

**Resultado esperado:** arquivo salvo em `./uploads` e resposta contendo `filename`, `size` e `url`.

### Teste 2 — Nenhum arquivo

```http
POST http://localhost:3000/midia/upload
```

Sem o campo `arquivo`.

**Resultado esperado:**

```text
400 Bad Request
```

Mensagem:

```text
Nenhum arquivo enviado.
```

### Teste 3 — Formato inválido

Envie, por exemplo:

```text
arquivo.pdf
```

**Resultado esperado:** arquivo rejeitado.

### Teste 4 — Arquivo maior que 2 MB

Envie uma imagem com mais de:

```text
2 MB
```

**Resultado esperado:** upload rejeitado.

## 📦 Instalação

Clone o projeto:

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

## ▶️ Executando

### Desenvolvimento

```bash
npm run start:dev
```

### Normal

```bash
npm run start
```

A aplicação ficará disponível, por padrão, em:

```text
http://localhost:3000
```

## 🧪 Testes automatizados

Caso os scripts padrão do NestJS estejam configurados:

```bash
npm run test
```

```bash
npm run test:e2e
```

```bash
npm run test:cov
```

## 👀 Observabilidade

O `AppModule` utiliza `createObserveModule()` para a configuração do **NestJS Observe**. fileciteturn3file0L1-L2

## 📌 Observações

- Os arquivos são armazenados localmente em `./uploads`.
- O campo do upload deve ser chamado `arquivo`.
- O tamanho máximo configurado é de 2 MB.
- São aceitos somente JPG, JPEG, PNG, GIF e WEBP.
- O nome do arquivo é gerado com UUID.
- O endpoint principal é `POST /midia/upload`.
- A URL retornada pelo Controller aponta para `/api/uploads/...`; a disponibilização dessa pasta como conteúdo estático depende de configuração adicional da aplicação.

## 🎯 Objetivo

Este mini projeto foi desenvolvido para praticar **Node.js + NestJS + TypeScript**, com foco em:

- criação de APIs REST;
- Controllers e Modules;
- upload de arquivos;
- `multipart/form-data`;
- Multer;
- interceptors;
- validação de arquivos;
- limite de tamanho;
- UUID;
- tratamento de erros;
- testes de API no Insomnia.
