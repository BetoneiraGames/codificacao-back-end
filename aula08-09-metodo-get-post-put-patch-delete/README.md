# API de Convidados — NestJS

API REST desenvolvida com **NestJS** para gerenciamento de convidados.  
Nesta etapa, o projeto recebeu novas funcionalidades para **listar, cadastrar, atualizar e remover convidados**, além de tratamento de erro para IDs que não existem.

Os endpoints foram testados utilizando o **Insomnia 13.2.0**.

---

## 🚀 Funcionalidades

A API possui as seguintes operações:

| Método | Endpoint | Função | Status esperado |
|---|---|---|---|
| `GET` | `/convidados` | Lista todos os convidados | `200 OK` |
| `POST` | `/convidados` | Cadastra um novo convidado | `201 Created` |
| `PATCH` | `/convidados/:id` | Atualiza a idade de um convidado | `200 OK` |
| `DELETE` | `/convidados/:id` | Remove um convidado | `204 No Content` |

Também foi implementado tratamento de erro para quando o ID informado não existe, retornando:

```json
{
  "message": "Convidado com ID X não encontrado!",
  "error": "Not Found",
  "statusCode": 404
}
```

---

## 📁 Estrutura relacionada

A implementação das funcionalidades está concentrada no controller e no service de convidados.

### `convidados.controller.ts`

O controller disponibiliza as rotas:

- `GET` para listar convidados;
- `POST` para cadastrar;
- `PATCH/:id` para alterar a idade;
- `DELETE/:id` para remover.

O controller utiliza `@Controller('Convidados')`, além dos decorators `@Get`, `@Post`, `@Patch` e `@Delete`.

### `convidados.service.ts`

O service mantém os convidados em memória e possui métodos para:

- `findAll()` — retorna todos os convidados;
- `findOne(id)` — localiza um convidado pelo ID;
- `atualizarIdade(id, idade)` — altera a idade;
- `removerConvidado(id)` — remove o convidado.

Quando um ID não é encontrado, é lançada uma `NotFoundException`.

---

## 👥 Dados iniciais

A aplicação inicia com os seguintes convidados:

```json
[
  {
    "id": 1,
    "nome": "Alice",
    "idade": 23
  },
  {
    "id": 2,
    "nome": "Enzo",
    "idade": 19
  },
  {
    "id": 3,
    "nome": "Jamily",
    "idade": 20
  },
  {
    "id": 4,
    "nome": "Alessandra",
    "idade": 18
  },
  {
    "id": 5,
    "nome": "Hudson",
    "idade": 21
  }
]
```

> Os dados são armazenados em memória. Portanto, alterações realizadas durante a execução da aplicação não são persistidas em um banco de dados.

---

# 🧪 Testes realizados no Insomnia 13.2.0

Todos os testes abaixo foram realizados com a aplicação rodando localmente em:

```text
http://localhost:3000
```

## 1. GET — Listar convidados

### Requisição

```http
GET http://localhost:3000/convidados
```

### Resultado

**Status:** `200 OK`

A API retornou a lista de convidados cadastrados.

Exemplo:

```json
[
  {
    "id": 1,
    "nome": "Alice",
    "idade": 23
  },
  {
    "id": 2,
    "nome": "Enzo",
    "idade": 19
  },
  {
    "id": 3,
    "nome": "Jamily",
    "idade": 20
  },
  {
    "id": 4,
    "nome": "Alessandra",
    "idade": 18
  },
  {
    "id": 5,
    "nome": "Hudson",
    "idade": 21
  }
]
```

### Evidência no Insomnia

![Teste GET — Listar convidados](metodo-get.png)

---

## 2. POST — Cadastrar convidado

### Requisição

```http
POST http://localhost:3000/convidados
```

### Body

```json
{
  "nome": "Matheus",
  "idade": 20
}
```

### Resultado

**Status:** `201 Created`

Resposta obtida no teste:

```json
{
  "mensagem": "Convidado Matheus adicionado com sucesso",
  "dados": {
    "nome": "Matheus",
    "idade": 20
  }
}
```

### Evidência no Insomnia

![Teste POST — Cadastrar convidado](metodo-post.png)

---

## 3. PATCH — Atualizar idade

O endpoint `PATCH` foi implementado para alterar a idade de um convidado específico.

### Requisição

```http
PATCH http://localhost:3000/convidados/2
```

### Body

```json
{
  "idade": 45
}
```

### Resultado

**Status:** `200 OK`

Resposta obtida no teste:

```json
{
  "id": 2,
  "nome": "Enzo",
  "idade": 45
}
```

### Evidência no Insomnia

![Teste PATCH — Atualizar idade](metodo-patch.png)

---

## 4. DELETE — Remover convidado

O endpoint `DELETE` foi configurado para remover um convidado pelo ID.

### Requisição de teste

```http
DELETE http://localhost:3000/convidados/9
```

Nesse teste foi utilizado o ID `9`, que não estava cadastrado.

### Resultado

**Status:** `404 Not Found`

Resposta obtida:

```json
{
  "message": "Convidado com ID 9 não encontrado!",
  "error": "Not Found",
  "statusCode": 404
}
```

Esse teste demonstra o tratamento de erro implementado no service quando o ID informado não existe.

### Evidência no Insomnia

![Teste DELETE — ID não encontrado](metodo-delete.png)

---

# 🔄 Resumo dos testes

| Operação | URL | Body | Resultado |
|---|---|---|---|
| GET | `/convidados` | — | `200 OK` |
| POST | `/convidados` | `{"nome":"Matheus","idade":20}` | `201 Created` |
| PATCH | `/convidados/2` | `{"idade":45}` | `200 OK` |
| DELETE | `/convidados/9` | — | `404 Not Found` |

---

# 🛠️ Tecnologias

- **NestJS**
- **TypeScript**
- **Insomnia 13.2.0**
- API REST
- `NotFoundException` para tratamento de recursos inexistentes

---

# ▶️ Como executar o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

Com a aplicação em execução, utilize:

```text
http://localhost:3000/convidados
```

para realizar as requisições.

---

## 📌 Observações

- Os convidados são armazenados em memória no `ConvidadosService`.
- O `PATCH` altera somente a propriedade `idade`.
- O `DELETE` utiliza status `204 No Content` quando a remoção é realizada com sucesso.
- Ao tentar acessar ou alterar um convidado inexistente, o service utiliza `NotFoundException`, resultando em `404 Not Found`.
- Os testes apresentados neste README foram realizados no **Insomnia 13.2.0**.

---

## 📸 Evidências

As imagens dos testes utilizadas neste README são:

- `metodo-get.png`
- `metodo-post.png`
- `metodo-patch.png`
- `metodo-delete.png`

Para que as imagens apareçam no GitHub, mantenha esses arquivos na mesma pasta do `README.md` ou ajuste os caminhos das imagens no README.

---

## 👨‍💻 Projeto

Projeto desenvolvido como prática de criação de uma API REST com NestJS, trabalhando com **Controllers, Services, DTOs, métodos HTTP e tratamento de exceções**.
