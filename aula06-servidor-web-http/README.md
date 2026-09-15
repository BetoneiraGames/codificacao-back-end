# 🛡️ Servidor HTTP Nativo - Sentinela

Este projeto demonstra a criação de um servidor HTTP simples, leve e seguro utilizando apenas o módulo nativo `http` do Node.js, sem dependências de frameworks externos (como Express).

## 📋 Sobre o Projeto

A aplicação atua como um "sentinela", escutando requisições HTTP na porta `3000`, registrando um log detalhado de cada chamada no terminal e aplicando cabeçalhos básicos de segurança (`Security Headers`) para proteção contra ataques comuns como *clickjacking* e *MIME-sniffing*.

## 🚀 Funcionalidades

* ⚡ **Zero dependências externas:** Construído inteiramente com APIs nativas do Node.js.
* 📦 **Suporte a ES Modules:** Código escrito utilizando a sintaxe moderna `import / export`.
* 🔒 **Cabeçalhos de Segurança HTTP:**
  * `X-Content-Type-Options: nosniff` (impede a interpretação incorreta do tipo de conteúdo).
  * `X-Frame-Options: DENY` (protege contra vulnerabilidades de *clickjacking*).
* 📝 **Log de Requisições:** Exibe no console o método HTTP e a URL acessada em tempo real.
* 📍 **Roteamento Simples:**
  * Rota `/status` para verificação de saúde da aplicação (Health Check).
  * Resposta padronizada `404 Not Found` para rotas não mapeadas.

## 🛠️ Tecnologias Utilizadas

* **Node.js** (v14+ com suporte a ES Modules ativado no `package.json` ou executado via módulo)

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/) (versão 14 ou superior)
* [Git](https://git-scm.com/)

## 🔧 Configuração e Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Configurar suporte a ES Modules

Caso o seu `package.json` ainda não esteja configurado, adicione `"type": "module"` nele:

```json
{
  "name": "servidor-sentinela",
  "version": "1.0.0",
  "type": "module",
  "main": "servidor.js"
}
```

## 🚀 Executando a Aplicação

Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
node servidor.js
```

Após a execução, você verá a mensagem:

```text
Sentinela ativo na porta 3000
```

## 🌐 Endpoints da API

| Método | Rota | Descrição | Resposta de Exemplo | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/status` | Retorna o estado atual do servidor | `{"servidor": "Online"}` | `200 OK` |
| `ANY` | `/*` | Rota para qualquer outro endereço | `{"erro": "Página não encontrada"}` | `404 Not Found` |

### Testando a API

Você pode testar os endpoints navegando pelo browser ou usando o terminal via `curl`:

**Verificar status:**
```bash
curl -i http://localhost:3000/status
```

**Testar rota inexistente:**
```bash
curl -i http://localhost:3000/outra-rota
```

## 📂 Estrutura do Projeto

```text
.
├── servidor.js       # Código fonte principal do servidor HTTP
├── package.json      # Configurações do projeto Node.js
└── README.md         # Documentação do projeto
```
