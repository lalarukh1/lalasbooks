import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const BookModal = ({ book, bookNumber, onClose }) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded p-4 flex flex-col relative rounded-lg"
            >
                <AiOutlineClose
                    onClick={onClose}
                    className="absolute right-3 text-2xl cursor-pointer"
                />
                <img
                    src={`../src/assets/books/${bookNumber}.png`}
                    alt="logo"
                    className="rounded-lg w-96 mt-10"
                />
            </div>
        </div>
    )
}

export default BookModal;