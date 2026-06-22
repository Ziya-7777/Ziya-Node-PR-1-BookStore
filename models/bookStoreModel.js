import mongoose from "mongoose";

const bookStoreSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true,
        minLength : 5
    },

    author : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    category : {
        type : String,
        required : true,
        trim : true
    },

    stock : {
        type : Number,
        default : 0
    }
});

const bookStore = mongoose.model("bookStore",bookStoreSchema);

export default bookStore;