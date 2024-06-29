import React from 'react';
import { useState } from 'react';
import BookModal from './BookModal';


const BooksCard = ({ book, bookNumber }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div
            className="w-1/2 py-4 px-8 font-sans cursor-pointer"
            onClick={() => setShowModal(true)}
        >
            <div className="p-4 flex items-stretch">
            <div className="">
               <img
                        src={`../src/assets/books/${bookNumber}.png`}
                        alt="logo"
                        className="rounded-lg w-36"
                />
            </div>
            <div className="py-2 pl-4 pr-2 w-full h-full">
            <h2 className="text-md font-light capitalize">{book.title}</h2>
                <div className="flex items-center content-center mt-2">
            <p className="text-sm text-gray-500 mr-1">{book.author}</p>
            <p className="text-sm text-gray-500">{book.publishYear}</p>
                </div>
            <p className="mt-2 text-xs">{book.description}</p>
                </div>
            </div>
    {showModal && (
        <BookModal book={book} bookNumber={bookNumber} onClose={() => setShowModal(false)} />
    )}
        </div>
    )
}

export default BooksCard;