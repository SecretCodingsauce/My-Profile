import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom"
import './App.css';
import RootLayout from "./Layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Socials from "./pages/Socials";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
const router=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="socials" element={<Socials/>}/>
        <Route path="skills" element={<Skills/>}>
        <Route path="certifications" element={<Certifications/>}/>
        </Route>
        <Route path="projects" element={<Projects/>}/>
        
      </Route>
   
  )
)

function App() {
  
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
