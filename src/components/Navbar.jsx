import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <>
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li> 
            <li>
                <Link to="/trips">My Trips</Link>
            </li>
        </ul>
    </>
    );
}