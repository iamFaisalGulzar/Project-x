import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct"
import Details from "./pages/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create-product" element={<AddProduct />}></Route>
          <Route exact path="/products/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
