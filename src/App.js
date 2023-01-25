import Navbar from "./components/navbar/Navbar";
import { RouterProvider, Outlet, createHashRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Learn from "./pages/learn/Learn";
import Projects from "./pages/projects/Projects";
import './app.scss'
import { useState } from "react";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

const Layout = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <ScrollToTop/>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Outlet />
    </div>
  )
};


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/learn',
        element: <Learn />
      },
      {
        path: '/contacts',
        element: <Contacts />
      }
    ]
  }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
