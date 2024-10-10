import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div>
            <h2 className="text-3xl font-bold m-3">Page not found </h2>
            <p className="m-3">Sorry! That page doesn't exist...</p>
            <Link className="m-3 underline text-blue-500" to="home">Back to Home</Link>
        </div>
    )
}