import { validationResult } from "express-validator";
import bookStore from "../models/bookStoreModel.js";

export const getAllBook = async(req, res)=>{
    try {
        const search = req.query.search || '';
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;
        const skip = (page - 1) * limit;

        const total = await bookStore.countDocuments();
        const totalPage = Math.ceil(total / limit);

        const data = await bookStore.find(
            {
                title : {
                    $regex : search,
                    $options : 'i'
                }
            }
        )
        .skip(skip)
        .limit(limit)
        .sort({title : 1})
   return res.status(200).json({ success: true, message: "All book data", data , skip,total,limit});
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
}

export const gettheBook = async (req, res) => {
    try {
        const { id } = req.params;

        if (!data) {
            return res.status(400)
            .json({ success: false, message: "Book not found" });
        }

        const data = await bookStore.findById(id, req.body)

        return res.status(200)
        .json({ success: true, message: "book data", data });
    } catch (error) {
        return res.status(400)
        .json({ success: false, message: error.message });
    }
}

export const createtheBook = async (req, res) => {
    try {
        const error = validationResult(req);

        if (error.array().length != 0) {
            return res.status(400)
            .json(error.array());
        }

        const data = await bookStore.create(req.body);

        return res.status(200)
        .json({ success: true, message: "book created successfully", data });
    } catch (error) {
        return res.status(400)
        .json({ success: false, message: error.message });
    }
}

export const deletetheBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await bookStore.findByIdAndDelete(id);

        if (!data) {
            return res.status(400)
            .json({ success: false, message: "Book not found" });
        }

        return res.status(200)
        .json({ success: true, message: "book data deleted", bookId: data.id });
    } catch (error) {
        return res.status(400)
        .json({ success: false, message: error.message });
    }
}

export const updatetheBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await bookStore.findByIdAndUpdate
        (id, 
        req.body, 
        { new: true });

        if (!data) {
            return res.status(400)
            .json({ success: false, message: "Book not found" });
        }
    
        return res.status(200)
        .json({ success: true, message: "book data updated", data });
    } catch (error) {
        return res.status(400)
        .json({ success: false, message: error.message });
    }
}