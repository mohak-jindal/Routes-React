import Home from "./pages/Home"
import About from "./pages/About"
import OurTeam from "./pages/OurTeam"
import Contact from "./pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourteam" element={<OurTeam />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
