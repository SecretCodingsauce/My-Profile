import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout (){
    return (
        <div className="root">
            <nav className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to ="skills">Skills</NavLink>
                <NavLink to="projects">Projects</NavLink>
                <NavLink to="socials">Socials</NavLink>
               
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
        
    )
}