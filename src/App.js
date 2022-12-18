import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Learn from "./pages/learn/Learn";
import Works from "./pages/works/Works";
import './app.scss'
import { useState } from "react";
import MobileMenu from "./components/mobileMenu/MobileMenu";

const Layout = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Outlet />
    </div>
  )
};


const router = createBrowserRouter([
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
        path: '/works',
        element: <Works />
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
