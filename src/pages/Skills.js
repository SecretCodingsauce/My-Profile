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
               
                <p>HTML</p>
                <img src={htmllogo}></img>
              
               </div>
            <div className="skill-icon">
               
                <p>CSS</p>
                <img src={csslogo}></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Javascript</p>
                <img src={javascriptlogo}></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Tailwind CSS</p>
                <img src={tailwindcsslogo}></img>
              
               </div>
            <div className="skill-icon">
               
                <p>React</p>
                <img src={reactlogo}></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Git</p>
                <img src={gitlogo}></img>

                </div>
              
               </div>
               <div className="align-middle text-center mt-7 mb-10">
               <NavLink className="bg-blue-800 text-white bold p-3 rounded-md"  to="certifications">My Certifications</NavLink>
               </div>
           <Outlet />
        
        </div>
    )
}