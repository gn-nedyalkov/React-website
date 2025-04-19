import {Link} from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
    return (
        <section className = "text-center flex flex-col justify-center items-center h-96">
            <FaExclamationTriangle className = "text-yellow-400 text-6xl mb-4" ></FaExclamationTriangle>
            <h1 className="text-6xl font-bold mb-5"> 404 NOT FOUND</h1>
            <p className="text-xl mb-5">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="bg-purple-500 text-white rounded-md px-2 py-2 hover:bg-black"> Go to Home Page</Link>
        </section>
    )
}
export default NotFoundPage