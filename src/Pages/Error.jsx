import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";


const Error = () => {
    useTitle('Error Page')
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <p className='text-red-600'>Sorry, an unexpected error has occurred.</p>
            <img src="https://i.ibb.co/Gk2TvpP/4660877-2446912.jpg" className="w-6/12" />
            <Link to='/'><button className="btn primary-bg-color border-0 mt-4">Back To homePage</button></Link>
        </div>
    );
};

export default Error;
