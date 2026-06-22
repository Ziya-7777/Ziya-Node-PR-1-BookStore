import { Router } from "express";
import validation from "../middlewares/validation-express.js"
import { deletetheUser, getAllUser, gettheUser, logintheUser, registertheUser, updatetheUser } from "../controllers/user.controller.js";

const userRouter = Router();

//register user
userRouter.post('/register', validation, registertheUser)

//login user
userRouter.post('/login', validation, logintheUser)

// get all user
userRouter.get('/',getAllUser)

//user by id
userRouter.get('/:id',gettheUser)

//delete user
userRouter.delete('/:id',deletetheUser)

//update user
userRouter.patch('/:id',updatetheUser)

export default userRouter;