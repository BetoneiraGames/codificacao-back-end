<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Logo do Nest" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para a construção de aplicações no lado do servidor (server-side) eficientes e escaláveis.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Versão do NPM" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Licença do Pacote" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="Downloads no NPM" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Apoiadores no Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Patrocinadores no Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Faça uma doação"/></a>
    <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Apoie-nos"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Siga-nos" alt="Siga-nos no Twitter"></a>
</p>

## Descrição

Repositório starter com TypeScript para o framework [Nest](https://github.com/nestjs/nest).

## Configuração do projeto

```bash
$ npm install
```

## Compilação e execução

```bash
# modo de desenvolvimento
$ npm run start

# modo de observação (watch mode)
$ npm run start:dev

# modo de produção
$ npm run start:prod
```

## Executando os testes

```bash
# testes unitários
$ npm run test

# testes e2e (ponta a ponta)
$ npm run test:e2e

# cobertura de testes
$ npm run test:cov
```

## Implantação (Deployment)

Quando estiver pronto para implantar sua aplicação NestJS em produção, existem algumas etapas fundamentais a serem seguidas para garantir que ela rode o mais eficientemente possível. Confira a [documentação de implantação](https://docs.nestjs.com/deployment) para obter mais informações.

Se estiver procurando por uma plataforma em nuvem para implantar sua aplicação NestJS, confira o [Mau](https://mau.nestjs.com), nossa plataforma oficial para implantação de aplicações NestJS na AWS. O Mau torna o deployment simples e rápido em apenas alguns passos:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

Com o Mau, você pode implantar sua aplicação em poucos cliques, permitindo focar no desenvolvimento de funcionalidades ao invés do gerenciamento de infraestrutura.

## Observabilidade

Em aplicações em produção, a observabilidade é essencial para entender como o sistema se comporta, detectar problemas precocemente e manter uma performance confiável.

O [NestJS Observe](https://observe.nestjs.com) instrumenta automaticamente sua aplicação NestJS, oferecendo alta visibilidade do seu sistema com uma configuração mínima:

- **Rastreamento distribuído (Distributed tracing):** Acompanhe requisições entre serviços e entenda como elas fluem pelo sistema.
- **Análise em cascata (Waterfall analysis):** Visualize a execução das requisições e identifique operações lentas, gargalos e atrasos inesperados.
- **Análise de desempenho:** Analise a performance da aplicação em tempo real e identifique rapidamente as áreas que precisam de otimização.
- **Métricas:** Acompanhe métricas chave da aplicação e da infraestrutura para entender a saúde do sistema e as tendências de desempenho.
- **Logs:** Centralize e correlacione logs com rastreamentos e outras telemetrias para facilitar a depuração.
- **Rastreamento de erros:** Detecte erros rapidamente e investigue suas causas raízes com o contexto necessário.
- **Monitoramento de SLA:** Acompanhe objetivos de nível de serviço (SLOs) e identifique quando sua aplicação está se aproximando ou ultrapassando os limites definidos.
- **Alarmes e alertas:** Configure alertas para erros críticos, degradação de desempenho, violações de SLA e outras anomalias para que sua equipe possa agir rapidamente.

Este projeto já está instrumentado. Crie uma conta gratuita em [observe.nestjs.com](https://observe.nestjs.com), adicione uma aplicação e cole a chave de API e a chave secreta geradas na chamada `ObserveModule.forRoot()` dentro do arquivo `src/app.module.ts`.

O plano gratuito não exige dados de pagamento e cobre até 300.000 eventos por mês. Você também pode explorar a [demonstração ao vivo](https://www.observe-demo.nestjs.com/dashboard) primeiro — um painel completo com dados de um serviço movimentado, sem precisar instalar nada.

## Recursos úteis

Confira alguns recursos que podem ser úteis ao trabalhar com o NestJS:

- Acesse a [Documentação do NestJS](https://docs.nestjs.com) para aprender mais sobre o framework.
- Para dúvidas e suporte, visite nosso [canal no Discord](https://discord.gg/G7Qnnhy).
- Para se aprofundar e ter uma experiência mais prática, confira nossos [cursos em vídeo oficiais](https://courses.nestjs.com/).
- Implante sua aplicação na AWS com a ajuda do [NestJS Mau](https://mau.nestjs.com) em poucos cliques.
- Instrumente automaticamente sua aplicação com o [NestJS Observe](https://observe.nestjs.com). Rastreamento distribuído, métricas e logs simplificados. Rastreamento de erros e monitoramento de desempenho para suas aplicações.
- Visualize o gráfico da sua aplicação e interaja com ela em tempo real utilizando o [NestJS Devtools](https://devtools.nestjs.com).
- Precisa de ajuda com o seu projeto (tempo parcial ou integral)? Confira nosso [suporte empresarial oficial](https://enterprise.nestjs.com).
- Para se manter atualizado e receber novidades, siga-nos no [X](https://x.com/nestframework) e no [LinkedIn](https://linkedin.com/company/nestjs).
- Procurando um emprego ou quer publicar uma vaga? Acesse nosso [quadro oficial de vagas](https://jobs.nestjs.com).

## Suporte

O Nest é um projeto de código aberto sob licença MIT. Ele cresce graças aos patrocinadores e ao incrível apoio de seus colaboradores. Se deseja se juntar a eles, por favor [leia mais aqui](https://docs.nestjs.com/support).

## Redes e Contato

- Autor - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

Nest possui [licença MIT](https://github.com/nestjs/nest/blob/master/LICENSE).

## Alterações do aluno

  Nova Função de controller para chamar convidados .