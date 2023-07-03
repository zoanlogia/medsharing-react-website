import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/LandingPage";
import About from "@/pages/About/About";
import Solutions from "@/pages/Solutions/Solutions";
import Devis from "@/pages/Devis/Devis.jsx";
import Services from "@/pages/Services/Services.jsx";
import Support from "@/pages/Support/Support.jsx";
import Error from "@/pages/Error/Error.jsx";
import Legacy from "@/pages/Legacy/Legacy.jsx";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/support" element={<Support />}/>
            <Route path="/devis" element={<Devis />}/>
            <Route path="/legacy" element={<Legacy />}/>
            <Route path="/*" element={<Error />} />
        </Routes>
    </BrowserRouter>
    )
  
};

export default Router;
