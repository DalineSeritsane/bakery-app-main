import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import AboutPage from "./componets/AboutPage";
import Recipe from "./componets/Recipe";
import Home from "./componets/Home";
import Footer from "./componets/Footer";
import NavBar from "./componets/Navbar";
import Contact  from "./componets/Contact";
import Ingredients from "./componets/Ingredients";

export default function App() {
  return (
    <>
    <div className="container main">
    <Router>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/Recipe" element={<Recipe/>} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Ingredients" element={<Ingredients/>} />
      </Route>
    </Routes>
    </Router>
    </div>
    <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
