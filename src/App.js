import './App.css';
import AboutUS from './pages/AboutUS/AboutUS';
import ContactUs from './pages/ContactUs/ContactUs';
import {  Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs/Blogs';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUS/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes> 
      

    </div>
  );
}

export default App;
