import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';


const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState([]);
    const [showType, setShowType] = useState('card');
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books')
            .then(response => {
                console.log(response);
                setBooks(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className={"w-full font-sans" + (showType === 'table' ? ' h-screen' : 'h-full')}>
            <div className="flex w-100 h-full">
                <div className="sidebar w-24 shadow-lg py-6 flex flex-col justify-items-center">
                    <div className="logo flex justify-center">
                        <img
                            src="../src/assets/logo.svg"
                            alt="logo"
                            className="w-14 h-14"
                        />
                    </div>
                    <div
                        className="menu mt-20 w-100 cursor-pointer"
                    >
                        <div className={"w-100" + (showType === 'card' ? ' card-bar' : ' bar')}>
                            <img
                                src="../src/assets/main.svg"
                                alt="main"
                                className="w-8 h-16 mx-auto"
                                onClick={() => setShowType('card')}
                            />
                        </div>
                        <div className={"w-100" + (showType === 'table' ? ' table-bar' : ' bar')}>
                        <img
                            src="../src/assets/admin.svg"
                            alt="admin"
                            className="w-8 h-16 mt-3 mx-auto"
                            onClick={() => setShowType('table')}
                        />
                        </div>
                        <div className={"w-100" + (showType === 'todo' ? ' todo-bar' : ' bar')}>
                            <img
                                src="../src/assets/todo.svg"
                                alt="todo"
                                className="w-6 h-16 mt-3 mx-auto"
                                onClick={() => setShowType('todo')}
                            />
                        </div>
                    </div>
                </div>
                <div className="main p-8 w-full">
                    <div className="flex flex-row w-full justify-between content-center">
                        <h1 className="text-3xl antialiased hover:subpixel-antialiased font-fancy text-slate-800">Lala's Books</h1>
                        <div className="w-1/3 flex content-center">
                            <input type="text" placeholder="Search.." className="w-full border py-1 px-2 border-slate-200 rounded text-sm"/>
                        </div>
                    </div>
                    <div className="content pt-20 pb-6">
                        {loading ? <Spinner /> : (
                            showType === 'table' ? (
                                <BooksTable books={books} />
                            ) : (
                                showType === 'card' ? (
                                <div>
                                <div className="showcase flex justify-center items-center content-center gap-x-4 mt-2 mb-24 h-48 px-24">
                                    <div className="relative flex">
                                        <h1 className="text-9xl font-bold font-fancy -left-12 top-40 absolute color-one">1</h1>
                                        <img
                                            src="../src/assets/books/1.png"
                                            alt="logo"
                                            className="w-36 shadow-sm rounded-xl hover:shadow-2xl transition duration-600 ease-in-out relative"
                                        />
                                    </div>
                                    <div className="relative flex mx-20">
                                        <h1 className="text-9xl font-bold font-fancy -left-16 mr-4 top-40 absolute color-two">2</h1>
                                        <img
                                            src="../src/assets/books/3.png"
                                            alt="logo"
                                            className="w-36 shadow-sm rounded-xl hover:shadow-2xl transition duration-600 ease-in-out"
                                        />
                                    </div>
                                    <div className="relative flex">
                                        <h1 className="text-9xl font-bold font-fancy -left-16 top-40 absolute color-three">3</h1>
                                        <img
                                            src="../src/assets/books/2.png"
                                            alt="logo"
                                            className="w-36 shadow-sm rounded-xl hover:shadow-2xl transition duration-600 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    {books && books.map((book, index) => (
                                        <BooksCard key={book._id} book={book} bookNumber={index + 1}/>
                                    ))}
                                </div>
                                </div>
                            ) : <div>
                                <div className="todo-list font-sans">
                                    <div className="todo-item flex flex-col justify-between items-center">
                                        <div className="flex flex-col justify-between w-full">
                                            <h1 className="text-2xl mb-3">Problem</h1>
                                            <p className="mb-6">I love reading books and I have a collection of books that I have been meaning to read since ages, but never find time. I also
                                            start several books at the same time and can not finish one book before starting another one. I don't have an online place
                                            to track or improve my book reading habits.</p>
                                            <h1 className="text-2xl mb-3">Solution</h1>
                                            <p>This is a books website created for the purpose of learning full-stack development. And it solves my problem of having no place
                                            to track my book  reading habits. This website contains a list of all of the books I own along with their images, names, author names,
                                            publish year and some description about the book. I will add features that allow me to mark books as read so I can see how many
                                            I have read and in what time period. I will also be able to see suggestions of books to buy or read using AI.</p>
                                        </div>
                                        <div className="flex justify-between w-full">
                                            <h1 className="text-2xl my-6">To-do list for this Full-stack project</h1>
                                        </div>
                                        <div className="flex flex-col items-start gap-y-3 text-slate-700">
                                            <p className="text-lg line-through">- Setup Node.js project from scratch.</p>
                                            <p className="text-lg line-through">- Create and configure a MongoDb database and learn to use Mongoose.</p>
                                            <p className="text-lg line-through">- Use Express js to manage routing, handling HTTP requests, and setting up REST for end points; Create, Show, Edit, List and Delete.</p>
                                            <p className="text-lg line-through">- Use React to create front end setup and re-usable components. Use Vite as a build tool.</p>
                                            <p className="text-lg line-through">- Make a design for the website in figma. Think about the User experience aspects and problems I am solving.</p>
                                            <p className="text-lg">- Style the website using Tailwind and make it fully responsive.</p>
                                            <p className="text-lg">- Create website template and finish layouts, alerts, icons, images, loading animation and colors etc for all pages ensuring a good user experience.</p>
                                            <p className="text-lg">- Apply AI GPT technologies available to generate suggestions for books.</p>
                                            <p className="text-lg">- Convert the website into apple and android native apps as the website is built using React.</p>
                                            <p className="text-lg">- Learn about different approaches for storing and serving images, and apply it to the website for book images.</p>
                                            <p className="text-lg">- Research on different methods of implementing search for the website, and apply the most suitable one. Learn to create database indexes and experiment with elastic search.</p>
                                            <p className="text-lg">- Apply accessibility principles on the website and make it fully accessible.</p>
                                            <p className="text-lg">- Learn how to use screen readers and make the website work fully on at least one screen reader.</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Home;