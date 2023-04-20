import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
//import Projectinfro from "./components/Projectinfo";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Education from "./routes/Education";
import Contact from "./routes/Contact";

// import image from "./images/drawing.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <image /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
