import { Link } from "react-router-dom";
import Skills from "./Skills";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="home-content">
            <h2 className="text-3xl font-bold m-3">Hello World!</h2>

            <div className=" p-3 text-xl mb-6">
            <p>My name is Ayushman Sharma</p>
            <p>I am a fresher Web Developer. Trying to fullfill all your web-dev needs.</p>
            <p>Here are my skills and Projects</p>
            </div>

            </div>

            <div className="home-links flex">
            <div className="home-link min-w-10 max-w-24 min-h-10 max-h-24 object-cover">
                <Link to="skills">
                    <img src="https://th.bing.com/th?id=OIP.6UJ0WuvZsofgIQU4PcGCSQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"></img>
                    <span>Skills</span>
                </Link>


            </div>
            <div className="home-link min-w-10 max-w-24 min-h-10 max-h-24 object-cover">
                <Link to="projects">
               
                <img src="https://static.vecteezy.com/system/resources/previews/003/738/370/original/management-project-icon-free-vector.jpg"></img>
                <span>Projects</span>
                </Link>
            </div>
            </div>

        </div>

        
    )
}