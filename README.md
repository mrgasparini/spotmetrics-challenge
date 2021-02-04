# SpotMetrics Challenge

Esse desafio foi solucionado com a ciação de uma API NodeJs, escrita em TypeScipt,

## Objetivo

O objetivo do desafio é construir uma API capaz de realizar consultas, cadastros, alterações e exclusões de comidas no inventário.

## Variáveis de Ambiente

Na raiz do projeto contém um arquivo com nome ".env-exemple", nele contém o exemplo de como dever ser criado o arquivo ".env", onde serão armazenadas todas as variáveis de ambiente.

## Banco de Dados

A API está integrada com banco de dados MongoDB. No arquivo de exemplo de variáveis de ambiente contem uma variável com a URI e nome do database, utilizadas para realizar a conexão com o banco de dados.

## Instalação

Para instalar as depenências, basta executar o seguinte comando no terminal na pasta raiz do projeto:

```bash
npm i
```

## Start

Para iniciar o projeto em modo de desenvolvimento, basta executar o seguinte comando no terminal na pasta raiz do projeto:

```bash
npm run dev
```

Para iniciar o projeto em modo de produção, basta executar o seguinte comando no terminal na pasta raiz do projeto:

```bash
npm run start
```

Para apenas realizar o build do projeto, basta executar o seguinte comando no terminal na pasta raiz do projeto:

```bash
npm run build
```

Para apenas limpar o build do projeto, basta executar o seguinte comando no terminal na pasta raiz do projeto:

```bash
npm run clean
```
## Testes

Foram criados testes para todas as rotas existentes no projeto, para realizar os testes basta executar o seguinte comando no terminal na pasta raiz do projeto:
```bash
npm run test
```

## Swagger

Todas rotas existentes na API se encontram descritas documentação do **SWAGGER**.

Para acessar o Swagger basta rodar o projeto e acessar a url: **http://localhost:3000/swagger**

