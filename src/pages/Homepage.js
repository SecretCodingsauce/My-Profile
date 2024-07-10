import { Link } from "react-router-dom";
import Skills from "./Skills";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="home-content">
            <h2>Hello World!</h2>
            <p>My name is Ayushman Sharma</p>
            <p>I am a fresher Web Developer. Trying to fullfill all your web-dev needs.</p>
            <p>Here are my skills and Projects</p>
            </div>

            <div className="home-links">
            <div className="home-link">
                <Link to="skills">
                <p>Skills</p>
                <img src="https://th.bing.com/th?id=OIP.6UJ0WuvZsofgIQU4PcGCSQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
                </Link>
            </div>
            <div className="home-link">
                <Link to="projects">
                <p>Projects</p>
                <img src="https://static.vecteezy.com/system/resources/previews/003/738/370/original/management-project-icon-free-vector.jpg"></img>
                </Link>
            </div>
            </div>

        </div>

        
    )
}