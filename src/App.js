import './App.css';
import AboutUS from './pages/AboutUS';
import ContactUs from './pages/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs/Blogs';
import HomePage from './pages/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      
    
     
      {/* <ContactUs/> */}
      {/* <Blogs/> */}
      {/* <HomePage/> */}
      
      <Routes>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/" element={<AboutUS/>}/>
      </Routes>
      

    </div>
  );
}

export default App;
