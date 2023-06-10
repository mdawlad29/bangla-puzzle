import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Layout from "./Layouts/Layout";
import ContactPage from "./pages/contact";

function App() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ];
  const allRoutes = useRoutes(routes);
  return <Layout>{allRoutes}</Layout>;
}

export default App;
