# 🚀 Projeto Node.js - Configuração de Variáveis de Ambiente

Este é um projeto em Node.js demonstrando como estruturar e validar variáveis de ambiente de forma segura utilizando o pacote `dotenv` e ES Modules.

## 📋 Sobre o Projeto

A aplicação inicializa um serviço simulado verificando as credenciais necessárias antes do boot, garantindo que chaves de API cruciais (como chaves de pagamento) e strings de conexão de banco de dados estejam presentes e válidas no ambiente de execução.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** (v14+ / Suporte a ES Modules)
- **Dotenv** (Gerenciamento de variáveis de ambiente)
- **MongoDB** (Banco de dados)

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

## 🔧 Configuração e Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do seu projeto tomando como base o modelo disponibilizado em `.env.example`:

**Exemplo do `.env.example`:**
```env
PORT=
API_KEY_PAGAMENTO=
DATABASE_URL=
```

**Exemplo de preenchimento do seu `.env` local:**
```env
PORT=3000
API_KEY_PAGAMENTO=sk_test_1234567890abcdef
DATABASE_URL=mongodb://localhost:27017/meu-banco
```

> ⚠️ **AVISO DE SEGURANÇA:** Nunca versione o arquivo `.env` no Git nem envie chaves secretas de produção (`sk_live_...`) para o seu repositório remoto. Certifique-se de que o arquivo `.env` esteja presente no seu `.gitignore`.

---

## 🚀 Executando a Aplicação

Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
node app.js
```

### Exemplo de Saída no Terminal:

```text
=== SERVIÇO DE CONFIGURAÇÃO CARREGADO ====
Servidor Rodando na porta: 3000
Conexão Banco de Dados: mongodb://localhost:27017/meu-banco
Status da API de Pagamento: chave de tamanho 28 autenticada.
```

---

## 📂 Estrutura do Projeto

```text
.
├── app.js            # Arquivo principal da aplicação
├── .env              # Variáveis de ambiente locais (não versionado)
├── .env.example      # Modelo de variáveis de ambiente para o repositório
├── .gitignore        # Arquivos ignorados pelo Git
├── package.json      # Dependências e scripts do projeto
└── README.md         # Documentação do projeto
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.