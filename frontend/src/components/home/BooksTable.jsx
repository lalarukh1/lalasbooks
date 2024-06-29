import React from 'react';
import {Link} from "react-router-dom";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineEdit} from "react-icons/ai";
import {MdOutlineDelete} from "react-icons/md";
import { MdOutlineAddBox } from 'react-icons/md';

const BooksTable = ({ books }) => {
    return (
        <div>
            <div className="w-100 flex justify-end">
        <Link to="/books/create" className="flex items-center bg-color-four text-white py-2 px-4 rounded-md">
             <MdOutlineAddBox size={24} />
             <span className="ml-3">Add Book</span>
        </Link>
            </div>
        <table className="table-auto border rounded-md w-full mt-8 rounded">
            <thead>
            <tr className="border-b">
                <th className="p-4">No</th>
                <th className="text-left">Title</th>
                <th className="text-left">Author</th>
                <th className="text-left">Publish Year</th>
                <th className="text-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            {books && books.map((book, index) => (
                <tr key={book._id} className="h-16">
                    <td className="text-center">
                        {index + 1}
                    </td>
                    <td className="">
                        {book.title}
                    </td>
                    <td className="">
                        {book.author}
                    </td>
                    <td className="">
                        {book.publishYear}
                    </td>
                    <td className="text-center">
                        <div className="flex justify-center gap-x-4">
                            <Link to={`/books/details/${book._id}`}>
                                <BsInfoCircle className="text-blue-500 text-2xl" />
                            </Link>
                            <Link to={`/books/edit/${book._id}`}>
                                <AiOutlineEdit className="text-yellow-600 text-2xl" />
                            </Link>
                            <Link to={`/books/delete/${book._id}`}>
                                <MdOutlineDelete className="text-red-600 text-2xl" />
                            </Link>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default BooksTable;