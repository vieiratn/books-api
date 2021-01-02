import Books from '../models/Books.js';

const booksController = {
    get: async (_, res) => {

        try {

            let result = await Books.find();

            if (!result) {
                res.status(400).send({ 'message': 'an error has occurred, please, try again later.' });
            }

            res.status(200).send({ result });

        } catch (error) {

            res.status(500).send({ 'message': 'an error has occurred, please, try again later.' });

        }
    },
    post: async (req, res) => {

        try {

            const { name, author, year, prize } = req.body;

            let result = await Books.findOne({ name: name });

            if (result) {
                res.status(400).send({ 'message': 'this book already exists.' });
            }

            result = await Books.create({
                name: name,
                author: author,
                year: year,
                prize: prize
            });

            res.status(200).send({ result });

        } catch (error) {

            res.status(500).send({ 'message': 'an error has occurred, please, try again later.' });

        }
    },
    put: async (req, res) => {

        try {

            const { name, author, year, prize } = req.body;

            const id = req.params.id;

            const result = await Books.findOneAndUpdate({
                _id: id
            },
                {
                    name: name,
                    author: author,
                    year: year,
                    prize: prize
                });

            if (result) {

                res.status(200).send({ result });

            } else {

                res.status(400).send({ 'message': 'an error has occurred, please, try again later.' });

            }

        } catch (error) {

            res.status(400).send({ 'message': 'an error has occurred, please, try again later.' });

        }
    },
    delete: async (req, res) => {

        try {

            const id = req.params.id;

            const result = await Books.findOneAndDelete({ _id: id });

            if (result) {

                res.status(200).send({ 'message': 'book sucessfully deleted.' });

            } else {

                res.status(400).send({ 'message': 'an error has occurred, please, try again later.' });

            }

        } catch (error) {

            res.status(400).send({ 'message': 'an error has occurred, please, try again later.' });

        }
    }
};

export default booksController;