'use client'
import NavBar from "./components/navbar";
import SideNav from "./components/sidenav";
import ProductsPage from "./components/products";
import Footer from "./components/footer";
const Products = () => {
 
    return ( 
    <div className="bg-slate-300">
        <NavBar/>
        <div className="flex flex-row items-start w-full mt-3">
            <div className="flex flex-col items-start pl-4 w-1/5">
                <SideNav/>
            </div>
            <dir className="flex flex-col pl-1 w-4/5">
                <ProductsPage/>
            </dir>
        </div>
        <Footer/>
    </div>
     );
}
 
export default Products;                                 