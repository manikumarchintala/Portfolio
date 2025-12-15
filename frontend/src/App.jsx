import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage.jsx";
import About from "./components/Aboutpage/About.jsx";
import RootLayout from "./components/Root/Root.jsx";
import ErrorPage from "./components/Errorpage/Errorpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
