import { body } from "express-validator"

const validation = [
     body('name')
        .trim()
        .notEmpty()
        .withMessage('Name required'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('E-mail required')
        .isEmail()
        .withMessage('Invalid E-mail'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters')
        .isStrongPassword()
        .withMessage('Password must contain uppercase, lowercase, number and special character.')

]

export const bookValidation = [
    body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required..."),

    body("author")
    .trim()
    .notEmpty()
    .withMessage("Author is required..."),

    body("price")
    .notEmpty()
    .withMessage("Price is required...")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((value) => value > 0)
    .withMessage("Price must be greater than 0"),

    body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required..."),

    body("stock")
    .notEmpty()
    .isNumeric()
    .withMessage("Stock is required...")
]

export default validation;  