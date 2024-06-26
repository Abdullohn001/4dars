// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/ErrorPage";

//layuts
import RootLayout from "./layout/RootLayout";


const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
};

export default App;
