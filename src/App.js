import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './pages';
import Productos from './pages/productos';
import Sale from './pages/sale';
import Cuidados from './pages/cuidados';
import Contacto from './pages/contacto';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" component={Productos} />
        <Route path="/sale" component={Sale} />
        <Route path="/cuidados" component={Cuidados} />
        <Route path="/contacto" component={Contacto} />
      </Routes>
    </Router>
    
  );
}

export default App;


