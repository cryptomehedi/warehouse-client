import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Common-Items/Footer";
import Header from "./Component/Common-Items/Header";
import Home from "./Component/Pages/Home/Home";

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
