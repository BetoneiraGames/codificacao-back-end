# 📝 Sistema de Logs Assíncrono

Sistema de registro de logs em Node.js utilizando ES Modules e o módulo nativo `fs/promises` para escrita assíncrona em arquivo local.

## 🚀 Funcionalidades

* **Registro Assíncrono de Logs**: Salva mensagens de sistema no arquivo `logs/system.log`[cite: 2].
* **Formatação de Data e Hora**: O utilitário `formatLog` adiciona a data atual e o horário local em cada linha de log.
* **Criação Automática de Diretório**: Cria a pasta `logs/` de forma dinâmica caso ela não exista[cite: 2].

## 🛠️ Tecnologias Utilizadas

* **Node.js** (configurado com `"type": "module"` no `package.json`)[cite: 3]
* **`fs/promises`**: Manipulação assíncrona de arquivos[cite: 2]
* **`path` e `url`**: Resolução de caminhos para ES Modules[cite: 2]

## 📋 Pré-requisitos

* Node.js instalado no sistema.

## 🔧 Como Executar

1. Acesse o diretório do projeto[cite: 3]:
   ```bash
   cd aula02-modulos-communjs-esm