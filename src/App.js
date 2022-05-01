import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common-Items/Footer";
import Header from "./Component/Common-Items/Header";
import RequireAuth from "./Component/Common-Items/RequireAuth";
import About from "./Component/Pages/About/About";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login-Reg/Login";
import Register from "./Component/Pages/Login-Reg/Register";
import PdAdd from "./Component/Pages/PdAdd-Del/PdAdd";
import Stock from "./Component/Pages/StockProduct/Stock";
import StockDet from "./Component/Pages/StockProduct/StockDet";

function App() {
  return (
    <div>
      <Header/>
      <div className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/stocks" element={<Stock/>} />
          <Route path="/stock/:productId" element={<RequireAuth><StockDet/></RequireAuth>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/add" element={<PdAdd/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
