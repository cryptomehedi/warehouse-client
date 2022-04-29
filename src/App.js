import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common-Items/Footer";
import Header from "./Component/Common-Items/Header";
import Home from "./Component/Pages/Home/Home";
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
          <Route path="/stock/:productId" element={<StockDet/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
