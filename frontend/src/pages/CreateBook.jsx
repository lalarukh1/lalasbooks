import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useSnackbar } from "notistack";

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
            description
        };
        setLoading(true);
        axios.post('http://localhost:5555/books', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book created successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error has occurred. Please try again!');
                console.log(error);
            });
    }
    return (
        <div className="p-4">
            <BackButton destination='/' />
            <h1 className="text-3xl my-8">Create Book</h1>
            {loading ? <Spinner /> : (
                <div className="flex flex-col w-fit p-4 border-sky-400">
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="text-xl"
                        >
                            Title
                        </label>
                        <input
                            id='title'
                            type="text"
                            className="border border-sky-400 p-2"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label
                            htmlFor="author"
                            className="text-xl"
                        >
                            Author
                        </label>
                        <input
                            id='author'
                            type="text"
                            className="border border-sky-400 p-2"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                        <label
                            htmlFor="description"
                            className="text-xl"
                        >
                            Description
                        </label>
                        <input
                            id='description'
                            type="text"
                            className="border border-sky-400 p-2"
                            value={author}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label
                            htmlFor="publishYear"
                            className="text-xl"
                        >
                            Publish Year
                        </label>
                        <input
                            id='publishYear'
                            type='number'
                            className="border border-sky-400 p-2"
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                        />
                        <button
                            className="bg-sky-400 text-white p-2 mt-4"
                            onClick={handleSaveBook}
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateBook;