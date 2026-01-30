import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Auth';
import Home from './pages/Home';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/signup" element={ <Auth/>} />
      </Routes>
    </BrowserRouter>
  );
}
