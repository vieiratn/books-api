import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import booksRouter from './routes/books.js';

const app = express();
const port = 3000;

app.use(express.json());

// Instanciando o DotEnv.
dotenv.config();

app.use('/api', booksRouter);

// Iniciando conexão com o Banco de Dados.
const { DB_PATH } = process.env;
mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Instanciando conexão com o Banco de Dados.
const connection = mongoose.connection;

// Adicionando callback para a conexão com o Banco de Dados.
connection.once('open', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('And now, MongoDB is up and running. Happy hacking!');
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is up and running on port ${port}.`);
    }
});