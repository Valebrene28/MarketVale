import Home from "./Components/Home/home";
import Logo from "./Components/Logo/Logo";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Details from "./Components/Details/Details";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <Logo />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/#home" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form" element={<Cart />}></Route>
          <Route
            path="/Details/:id"
            element={<Details />}
            component={Details}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// <>
// <div className='photo'></div>
// <Logo />
// <Home />
// </>
export default App;
