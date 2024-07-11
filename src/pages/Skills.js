import { NavLink, Outlet } from "react-router-dom"
import reactlogo from './img/reactlogo.png'
import htmllogo from './img/html.png'
import csslogo from './img/css.png'
import gitlogo from './img/git.png'
import githublogo from './img/github.png'
import javascriptlogo from './img/javascript.png'
import tailwindcsslogo from './img/tailwind-css.png'
export default function Skills() {
    return (
        <div className="skills">

            <h2>Skills</h2>
            <div className="skill-icons">
                <div className="skill-icon">


                    <img className="logo" src={htmllogo}></img>
                    <span>HTML</span>
                </div>
                <div className="skill-icon">


                    <img className="logo" src={csslogo}></img>
                    <span>CSS</span>
                </div>
                <div className="skill-icon">


                    <img className="logo" src={javascriptlogo}></img>
                    <span>Javascript</span>
                </div>
                <div className="skill-icon">


                    <img className="logo" src={tailwindcsslogo}></img>
                    <span>Tailwind</span>
                </div>
                <div className="skill-icon">


                    <img className="logo" src={reactlogo}></img>
                    <span>React</span>
                </div>
                <div className="skill-icon">


                    <img className="logo" src={gitlogo}></img>
                    <span>Git</span>
                </div>

            </div>
            <div className="align-middle text-center mt-7 mb-10">
                <NavLink className="bg-blue-800 text-white bold p-3 rounded-md" to="certifications">My Certifications</NavLink>
            </div>
            <Outlet />

        </div>
    )
}