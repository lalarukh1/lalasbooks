import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        // id: {
        //     type: String,
        //     required: true,
        // },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('book', bookSchema);