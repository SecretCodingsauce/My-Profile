import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function RootLayout (){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="p-4 mb-5  flex justify-between bg-blue-600 text-white text-xl ">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <nav className="">

            <button onClick={toggleMenu} className=" md:hidden pl-5 pr-5 " ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg></button>
                
                <div className={`w-full md:w-auto md:flex ${isMenuOpen ? 'block' : 'hidden' }`}>
                    <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline "to="/">Home</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline"to ="skills">Skills</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline"to="projects">Projects</NavLink>
                <NavLink className="pl-5 pr-5 hover:font-semibold hover:underline "to="socials">Socials</NavLink>
                </ul>
                </div>
                
               
            </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
        
    )
}