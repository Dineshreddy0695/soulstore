     import { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Banner from "./Banner"
import Catogory from "./Catogory"
import Createaccount from "./CreateAccount";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Hoodie from "./Hoodie";
import MensTrousers from "./MensTrousers";
import Login from "./login";
import ProductPage from "./ProductPage";
import ProductList2 from "./ProductList2";
import Banner2 from "./Banner2";
import Deals from "./Deals";
import ShopByBrands from "./ShopByBrands";
import Help from "./Help";
import Discount from "./discount";
import BrandPage from "./pages/BrandPage";
import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
function App() {
  const [search, setSearch] = useState("");

const products = [
    { id: 1, name: "Black Hoodie",  price: 999, image: "https://image.hm.com/assets/hm/83/82/8382674e3d631141f9eeb7effd0305733e2e5cc2.jpg?imwidth=657", },
    { id: 2, name: "White T-Shirt", price: 499, image: "https://image.hm.com/assets/hm/3a/34/3a34c07b3dfd3500dfd262be127cc5808b0d1f1b.jpg?imwidth=657" },
    { id: 3, name: "Printed Shirt", price: 599, image: "https://image.hm.com/assets/hm/fa/4e/fa4ef490806006bbcb162842f5bd05aaa412869a.jpg?imwidth=1536" },
    { id: 4, name: "Slim Jeans", price: 999, image: "https://image.hm.com/assets/hm/a1/ed/a1edb5deb9eabbd1e0002f5f79c0b160f455f163.jpg?imwidth=564" },
    { id: 5, name: "Sweat T-shirt", price: 499, image: "https://image.hm.com/assets/hm/da/1a/da1a14af33e4385b8794051da4d9b322a60dca98.jpg?imwidth=564" },
    { id: 6, name: "Winter Shacket", price: 1299, image: "https://image.hm.com/assets/hm/1c/9b/1c9b621549549035cbcaf6048843a74187409314.jpg?imwidth=564" },
    { id: 7, name: "Padded Jacket", price: 1299, image: "https://image.hm.com/assets/hm/5b/1b/5b1b931b0dbeaba1780ba93ec7aa277d50da1caa.jpg?imwidth=657" },
    { id: 8, name: "Men's shoes", price: 499, image: "https://image.hm.com/assets/hm/17/0d/170d7e31f620a21d459e59fcdb9b33ef99cb614f.jpg?imwidth=1536" },
    
    
  ];

  
  return (
    <BrowserRouter
>
  <div className="min-h-screen flex flex-col">
   <Navbar search={search} setSearch={setSearch} />
      
      <Routes>


        <Route 
          path="/" 
          element={
            <>
              <Banner />
              
              <Catogory />
              <ProductList />
              <Banner2/>
              <ProductList2/>
               <Deals/>
       <ShopByBrands/>
            </>
          } 
        />


        <Route path="/mens/shirts" element={<Hoodie />} />
        <Route  path="/mens/trousers" element={< MensTrousers/>}/>
        <Route  path="/register" element={< Createaccount/>}/>
        <Route path="/login" element={< Login/>}/>
        <Route path="/brand/:brand" element={<BrandPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
      </div>
     
      

       <Help/>
       <Discount/>
       <Footer/>




</BrowserRouter>
    
  );
}

export default App;