import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Esperienze from "./pages/Esperienze";
import Competenze from "./pages/Competenze";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competenze" element={<Competenze />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
