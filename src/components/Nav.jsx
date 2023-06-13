import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/">Home </Link> |
            <Link to="/settings"> Settings</Link> |
            <Link to="/questions"> Questions</Link> |
            <Link to="/result"> Result</Link>
        </div>
    )
}

export default Nav;