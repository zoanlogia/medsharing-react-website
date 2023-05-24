import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import About from "../pages/About/About";
import Solutions from "../pages/Solutions/Solutions";
import Contact from "../pages/Contact/Contact";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
    )
  
};

export default Router;
