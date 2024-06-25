// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

//layuts
import RootLayout from "./layout/RootLayout";

//component
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={true}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />
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
