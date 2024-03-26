import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    const [auth,authSet] = useState(true)

    return ( 
        <div className="flex flex-col w-full">
        <nav>
            <p><strong>Tel</strong> +254704108976</p>
            <p>Order now </p>
        </nav>

        <menu>
            <div >
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={100}
                    priority={true}
                    style={{ width: "auto", height: "100%" }}
                />
            </div>

            <form action="">
                <div className="">
                    <input type="search" name="" id="" />
                </div>
                <div className="">
                    <FaSearch />
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

        <menu>
            <div>
                <Link href="#" className="">Home</Link>
            </div>
            <div>
                <Link href="#" className="">Best sellers</Link>
            </div>
            <div>
                <Link href="#" className="">All New Sales</Link>
            </div>
            <div>
                <Link href="#" className="">Buying Guide</Link>
            </div>
            <div>
                <Link href="#" className="">About Us</Link>
            </div>
            <div>
                <Link href="#" className="">Contact Us</Link>
            </div>
        </menu>
    </div>
     );
}
 
export default NavBar;