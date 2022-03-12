import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from './components/Products';


import './App.css';


const App = () => {
  return (
    <div className="App">
      <h2>React Router</h2>
      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products />} />
          {/* <Route path="*" element={<h2>Page not found</h2>} /> */}
          <Route path="*" element={<Navigate to="/about" />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
