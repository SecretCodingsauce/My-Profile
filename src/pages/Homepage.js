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
                <img src=""></img>
                </Link>
            </div>
            <div className="home-link">
                <Link to="projects">
                <p>Projects</p>
                <img src=""></img>
                </Link>
            </div>
            </div>

        </div>

        
    )
}