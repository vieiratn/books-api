# CRUD API em Node.js

Trata-se de um API de estudos com CRUD completo para uma aplicação de registro de livros.

## Como instalar.

1. Basta fazer uma cópia deste repositório com o comando abaixo:

`git clone https://github.com/vieiratn/books-api.git`

2. Após clonar o repositório, basta renomear o arquivo de variáveis de ambiente, conforme abaixo:

**de:** .env-sample
**para:** .env

Após, adicionar o endereço do seu Banco de Dados - MongoDB - na variável DB_PATH, conforme abaixo:

`DB_PATH=ENDEREÇO_DO_SEU_BANCO_DE_DADOS`

3. Abrir o terminal e instalar as dependências com o comando abaixo:

`npm install`

## Lista de Endpoints

**GET /books** : Retorna todos os livros cadastrados no banco.

**POST /books** : Enviando um JSON com as informações abaixo, será possível incluir novos livros no sistema.

_Campos obrigatórios_

**Name**: Nome do livro.
**Author**: Nome do autor do livro.
**Year**: Ano de lançamento do livro.
**Prize**: Preço de venda do livro.

_Exemplo:_

{
"name": "Ponto Cego",
"author": "Rebecca Scherm",
"year": "2020",
"prize": "59.90"
}

**PUT /books/ID** : Ao informar na rota o ID do livro a ser alterado e passando as novas informações no JSON, será possível proceder alteração das informações.

_Campos obrigatórios_

**Name**: Nome do livro.
**Author**: Nome do autor do livro.
**Year**: Ano de lançamento do livro.
**Prize**: Preço de venda do livro.

_Exemplo:_

{
"name": "Ponto Cego",
"author": "Rebecca Scherm",
"year": "2018",
"prize": "59.90"
}

**DELETE /books/ID** : Ao informar na rota o ID do livro a ser alterado removido, será possível excluir informações do banco.
