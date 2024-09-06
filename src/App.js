import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Components/Navbar"; // Navbar component
import { Route, Routes } from "react-router-dom"; // Routing components
import Home from "./Components/Home"; // Home component
import Store from "./Components/Store"; // Store component
import About from "./Components/About"; // About component
import ShoppingCartProvider from "./Context/ShoppingCartContext"; // Shopping Cart Context

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
