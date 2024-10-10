import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom"
import './App.css';
import RootLayout from "./Layouts/RootLayout";
import Homepage from "./pages/Homepage";
import Socials from "./pages/Socials";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="home" element={<RootLayout />}>
      <Route path="home" element={<Homepage />} />
      <Route path="socials" element={<Socials />} />
      <Route path="skills" element={<Skills />}>
        <Route path="certifications" element={<Certifications />} />
      </Route>
      <Route path="projects" element={<Projects />} />

      <Route path="*" element={<NotFound />} />
    </Route>

  )
)

function App() {

  return (
    <RouterProvider router={router} />

  );
}

export default App;
