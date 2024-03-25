'use client'
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
    const [auth,authSet] = useState(false)
    return ( 
    <div className="bg-slate-700">
        <div className="flex flex-col w-full">
            <nav>
                <p><strong>Tel</strong> +254704108976</p>
                <p>Order now </p>
            </nav>
            <menu>
                <div className="">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={100}
                    />
                </div>

                <form action="">
                    <div className="">
                        <input type="search" name="" id="" />
                    </div>
                    <div className="">
                        <button type="button">search</button>
                    </div>
                </form>

                <div className="">
                    {auth && 
                    <div className="">
                        <button type="button">logout</button>

                    </div>}
                    {!auth && 
                    <div className="">
                        <button type="button">login</button>
                        <button type="button">register</button>
                    </div>}
                </div>

                <div className="">
                    <FaShoppingCart />
                </div>

            </menu>
        </div>
        <div>
            <nav>

            </nav>
        </div>
        
        <div>
            <main>
            </main>
        </div>

        <footer>
            <p>copyright 2024</p>
        </footer>
    </div>
     );
}
 
export default Products
;                                 