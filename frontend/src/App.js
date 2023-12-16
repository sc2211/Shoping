
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import menbanner from './Components/Assets/men.jpg'
import womenbanner from './Components/Assets/women.jpg'
import kidsbanner from './Components/Assets/kids.jpg';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>

     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={menbanner} category="men"/>}/>
      <Route path='/women' element={<ShopCategory  banner={womenbanner}category="women"/>}/>
      <Route path='/kids' element={<ShopCategory  banner ={kidsbanner}category="kids"/>}/>
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>

  
      <Route path='/cart' element={<Cart/>}/>

      <Route path='/login' element={<LoginSignup/>}/>
      
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </div>
  );
}

export default App;
