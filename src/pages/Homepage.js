import { Link } from "react-router-dom";
import Skills from "./Skills";

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="home-content">
            <h2 className="text-3xl font-bold m-3">Hello World!</h2>

            <div className=" p-3 text-xl mb-6" >
            <p className="pb-2">My name is <strong>Ayushman Sharma</strong></p>
            <p className="pb-2">I am a fresher Web Developer. Trying to fullfill all your web-dev needs.</p>
            <p className="pb-2">Here are my skills and Projects.</p>
            </div>

            </div>

            
            
                <Link className="card" to="skills">
                <svg className="max-w-36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

                    <span className="font-bold text-lg">Skills</span>
                </Link>
            
                <Link className="card" to="projects">
               
                <svg className="max-w-36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg> 

                <span className="font-bold text-lg">Projects</span>
                </Link>
           
            </div>

        

        
    )
}