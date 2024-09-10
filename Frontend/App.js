import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/Menu";
import Java from "./pages/Java";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <About/>
        <Menu/>
       <Java/>
      </Router>
    </div>
  );
}

export default App;
