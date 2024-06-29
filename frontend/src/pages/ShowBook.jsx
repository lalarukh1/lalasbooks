import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';
import {useParams} from "react-router-dom";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then(response => {
                console.log(response);
                setBook(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="p-4">
            <BackButton destination='/' />
            <h1 className="text-3xl my-8">Show Book</h1>
            {loading ? <Spinner /> : (
                <div className="flex flex-col w-fit p-4 border-sky-400">
                    <div className="flex flex-col">
                        <div className="text-xl">Title:</div>
                        <div className="text-xl my-2">{book.title}</div>
                        <div className="text-xl">Author:</div>
                        <div className="text-xl my-2">{book.author}</div>
                        <div className="text-xl">Publish Year:</div>
                        <div className="text-xl my-2">{book.publishYear}</div>
                        <div className="text-xl mr-4"> Create time</div>
                        <div className="my-2">{new Date(book.createdAt).toString()}</div>
                        { book.updateAt ? <div className="text-xl mr-4"> Last Update time</div> : '' }
                        { book.updateAt ?  <div className="my-2">{new Date(book.updateAt).toString()}</div> : '' }
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowBook;