import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store/store"; // Importa lo store Redux
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa lo stile di Bootstrap
import NavbarComponent from "./components/NavBar";

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Router>
      {/* Navbar globale */}
      <NavbarComponent />
      {/* Rotte della tua applicazione */}
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
