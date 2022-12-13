import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";

const Layout = () => {

  return (
    <div className="app">
      <Navbar />
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
