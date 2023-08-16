import Home from "./Components/Home/home";
import Logo from "./Components/Logo/Logo";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Login/Login";

function App() {
  return (
    <>
    <Logo/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/#home" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
  // <>
  // <div className='photo'></div>
  // <Logo />
  // <Home />
  // </>
export default App;
