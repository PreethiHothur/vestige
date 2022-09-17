import logo from "./logo.svg";
import "./App.css";
import icons from "react-bootstrap-icons";
import Nav from "./Components/Navbar";
import Banner from "./Components/Banner";
import Brand from "./Components/Brands";
import About from "./Components/About";
import News from "./Components/News";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Carousel from "./Components/Carousel";
import Products from "./Components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Branch from "./Components/Branch";
import Items from "./Components/Products/Items/Items";
import Form from "./Components/Form";
import Management from "./Components/Management";
import Opportunity from "./Components/Opportunities";
function App() {
  return (
    <>
      {/* <Opportunity /> */}
      {/* <Management /> */}
      <BrowserRouter>
        {/* <Items /> */}
        <Nav />
        <Home />
        {/* <Carousel /> */}

        {/* <Brand /> */}
        {/* <News /> */}
        {/* <Carousel /> */}
        {/* <Banner />
        <Brand />
        // 
        <News /> */}
        {/* <Gallery /> */}
        <Routes>
          <Route path="/" element={<Banner />} />

          <Route path="/home" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />

          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/login" element={<Form />} />
          <Route path="/news" element={<News />} />
          <Route path="/brands" element={<Brand />} />
        </Routes>
        {/* <Products /> */}
        {/* <Form /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
