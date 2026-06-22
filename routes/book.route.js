import { Router } from "express";
import { createtheBook, deletetheBook, getAllBook, gettheBook, updatetheBook } from "../controllers/book.controller.js";
import { bookValidation } from "../middlewares/validation-express.js";

const bookRouter = Router();

//get all book
bookRouter.get('/', getAllBook)

// get book by id
bookRouter.get('/:id', gettheBook)

//create book
bookRouter.post('/', bookValidation, createtheBook)

//delete book
bookRouter.delete('/:id', deletetheBook)

//update book
bookRouter.patch('/:id', updatetheBook)

export default bookRouter;