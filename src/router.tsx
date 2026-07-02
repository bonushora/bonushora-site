import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import HowItWorks from "./pages/public/HowItWorks";
import Philosophy from "./pages/public/Philosophy";
import Manual from "./pages/docs/Manual";
import Roadmap from "./pages/public/Roadmap";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/como-funciona", element: <HowItWorks /> },
  { path: "/filosofia", element: <Philosophy /> },
  { path: "/manual", element: <Manual /> },
  { path: "/roadmap", element: <Roadmap /> },
]);
