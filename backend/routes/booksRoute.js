import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// create a book
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: `Send all required fields`})
        }
        const newBook = new Book({
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        });

        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
    }
});

// List all books
router.get('/', async (request, response) => {
    try {
        const books = await Book.find();
        return response.status(200).send(books);
    } catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
    }
});

// Get book by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
    }
});

// Update a book
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: `Send all required fields`})
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({ message: `Book with id ${id} not found`});
        }

        return response.status(200).json({ message: `Book with id ${id} updated successfully`});
    } catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
    }
});

// Delete book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: `Book with id ${id} not found`});
        }

        return response.status(200).json({ message: `Book with id ${id} updated successfully`});
    } catch (error) {
        console.log(error.message);
        response.status(500).send(error.message);
    }
});

export default router;
