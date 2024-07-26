import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout (){
    return (
        <div>
            <div className="p-4 mb-5  flex justify-between bg-blue-600 text-white text-xl">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <nav className="">
                
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline "to="/">Home</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline"to ="skills">Skills</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline"to="projects">Projects</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline "to="socials">Socials</NavLink>
                
               
            </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
        
    )
}