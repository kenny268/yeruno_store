'use client'
import NavBar from "./components/navbar";
import SideNav from "./components/sidenav";
import ProductsPage from "./components/products";
import Footer from "./components/footer";
const Products = () => {
 
    return ( 
    <div className="bg-slate-700">
        <NavBar/>
        <SideNav/>
        <ProductsPage/>
        <Footer/>
    </div>
     );
}
 
export default Products
;                                 