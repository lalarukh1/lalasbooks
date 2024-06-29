import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";


const BackButton = ({ destination = '/'}) => {
    return (
        <div className="flex">
            <Link
                to={destination}
                className="text-sky-800 text-2xl w-fit p-3"
            >
                <BsArrowLeft className="text-4xl text-sky-800" />
            </Link>
        </div>
    )
}

export default BackButton;