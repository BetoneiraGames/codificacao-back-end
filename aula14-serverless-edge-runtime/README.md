# ⏰ Hora do Servidor — Vercel

Projeto desenvolvido com **Node.js** para demonstrar a criação de uma função executada na **Vercel**, utilizando o runtime **Edge**.

A aplicação retorna informações sobre o horário do servidor, região de execução e tempo de processamento da função.

## 🚀 Tecnologias utilizadas

- Node.js
- Vercel
- JavaScript / TypeScript
- Insomnia

## 📋 Sobre o projeto

O projeto possui uma função chamada `hora.servidor.ts`, localizada dentro da pasta `api/`, e configurada para utilizar o runtime `edge` da Vercel.

Quando a função é executada, ela coleta:

- Horário atual do servidor;
- Região da Vercel;
- Tempo de execução da função;
- Identificação da execução através do header `x-vercel-id`.

## 📁 Estrutura do projeto

```text
aula14-serverless-edge-runtime/
├── api/
│   └── hora.servidor.ts
├── package.json
└── README.md
```

## ⚙️ Funcionamento

A função registra o momento inicial da execução:

```typescript
const inicio = Date.now();
```

Depois, obtém o identificador da execução fornecido pela Vercel:

```typescript
const vercelId = req.headers.get('x-vercel-id') || 'N/A';
```

A partir desse identificador, a aplicação identifica a região de execução.

Ao final, a API retorna um JSON contendo:

```json
{
  "message": "Função executada com sucesso!",
  "horarioServidor": "06/10/2026, 15:54:00",
  "regiao": "regiao",
  "tempoExecução": "1728220000000 - 1728220000000"
}
```

A resposta da função utiliza status HTTP `200`.

## 💻 Execução local

Instale as dependências:

```bash
npm install
```

Para executar o projeto localmente:

```bash
npm run dev
```

> O comando exato depende dos scripts definidos no `package.json`.

## ☁️ Deploy na Vercel

O projeto pode ser publicado utilizando a **Vercel**.

Após conectar o repositório GitHub à Vercel, a plataforma realiza o deploy da aplicação.

A função utiliza o runtime Edge:

```typescript
export const config = {
    runtime: 'edge',
};
```

## 🧪 Testando com Insomnia

Após realizar o deploy na Vercel, copie a URL disponibilizada pela plataforma.

No **Insomnia**, crie uma requisição:

```http
GET https://SEU-PROJETO.vercel.app/api/hora
```

Clique em **Send**.

A resposta será semelhante a:

```json
{
  "message": "Função executada com sucesso!",
  "horarioServidor": "06/10/2026, 15:54:00",
  "regiao": "iad1",
  "tempoExecução": "1728220000100 - 1728220000000"
}
```

Os valores de horário, região e tempo de execução podem variar a cada requisição.

## 📊 Dados retornados

| Campo | Descrição |
|---|---|
| `message` | Informa que a função foi executada com sucesso |
| `horarioServidor` | Data e hora da execução |
| `regiao` | Região identificada pela Vercel |
| `tempoExecução` | Tempo calculado durante a execução |

## 🔎 Teste no Insomnia

```text
Método: GET
URL: https://SEU-PROJETO.vercel.app/api/hora
Status esperado: 200 OK
```

## 👨‍💻 Autor

Projeto desenvolvido para estudos de desenvolvimento backend, funções serverless, runtime Edge, Vercel e testes de requisições HTTP com Insomnia.