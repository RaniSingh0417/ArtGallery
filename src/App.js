import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Singleart from "./pages/Singleart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Update from "./pages/Update";

function App() {
  return (
    <>
      <Router>
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <Routes className="relative">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singleart/:id" element={<Singleart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
