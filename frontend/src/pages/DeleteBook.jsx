import React , { useState } from 'react';
import BackButton  from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const handleDeleteBook = () => {
        setLoading(true);
        axios.delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book deleted successfully', { variant: 'success' });
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                alert('Error');
                console.log(error);
            });
    };
    return (
        <div className="p-4">
            <BackButton destination='/' />
            <h1 className="text-3xl my-8 mx-3">Delete Book</h1>
            {loading ? <Spinner /> : (
                <div className="flex flex-col w-fit p-4 border-sky-400">
                    <p>Are you sure you want to delete this book?</p>
                    <button
                        onClick={handleDeleteBook}
                        className="bg-red-500 text-white p-2 mt-4"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default DeleteBook;