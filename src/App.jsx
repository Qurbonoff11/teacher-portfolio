import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-300 overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
