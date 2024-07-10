import { NavLink, Outlet } from "react-router-dom";
import Certifications from "./Certifications";

export default function Skills() {
    return (
        <div className="skills">
            
            <h2>Skills</h2>
            <div className="skill-icons">
            <div className="skill-icon">
               
                <p>HTML</p>
                <img src=""></img>
              
               </div>
            <div className="skill-icon">
               
                <p>CSS</p>
                <img src=""></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Javascript</p>
                <img src=""></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Tailwind CSS</p>
                <img src=""></img>
              
               </div>
            <div className="skill-icon">
               
                <p>React</p>
                <img src=""></img>
              
               </div>
            <div className="skill-icon">
               
                <p>Git</p>
                <img src=""></img>

                </div>
              
               </div>
               <NavLink to="certifications">My Certifications</NavLink>
           <Outlet />
        
        </div>
    )
}