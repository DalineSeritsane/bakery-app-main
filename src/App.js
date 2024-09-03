import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./components/AboutPage";
import Recipe from "./components/Recipe";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <Router>
      <div className="container main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Recipe" element={<Recipe />} />
            <Route path="About" element={<AboutPage />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Ingredients" element={<Ingredients />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
