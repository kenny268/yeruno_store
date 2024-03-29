import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    const [auth,authSet] = useState(false)

    return ( 
        <div className="flex flex-col w-full bg-zinc-950">
            <nav className="flex flex-row w-11/12 ml-auto mr-auto justify-between text-white p-2 bg-zinc-950">
                <p className="">Your store next door</p>
                <p>Order now </p>
            </nav>

        <menu className="flex flex-row w-11/12 justify-between ml-auto mr-auto text-white bg-zinc-950 mb-2">
            <div className="flex flex-row">
                <div className="h-10 mr-1">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={400}
                        height={100}
                        priority={true}
                        className="w-60 h-10 rounded-sm"
                    />
                </div>

                <form action="" className="flex flex-row items-start justify-self-stretch ml-1">
                    <div className="h-10">
                        <input type="search" name="" id="" placeholder="Search" className="w-72 h-9 pl-2 pt-px" />
                    </div>
                    <div className="bg-slate-500 p-2" >
                        <FaSearch className="w-8 h-5 rounded-sm text-black"/>
                    </div>
                </form>
            </div>

            <div className="flex flex-row items-center">
                <p className="">TEL <span className="underline">+254704108976</span></p>
            </div>

            <div className="flex flex-row items-center">
                <div>
                    {auth && 
                    <div className="w-11/12 flex flex-row justify-around">
                        <button type="button" className="text-xl mr-2">logout</button>
                        <div className="border-l border-white h-5"><hr /></div>
                        <p className="text-xl">User</p>

                    </div>}
                    {!auth && 
                    <div className="w-11/12 flex flex-row  justify-around items-center">
                        <button type="button" className="text-xl mr-2">Login</button>
                        <div className="border-l border-white h-5"><hr /></div>
                        <button type="button" className="text-xl ml-2">Register</button>
                    </div>}
                </div>
                <div className="p-2">
                    <FaShoppingCart className="w-8 h-6 rounded-sm text-gray-100"/>
                </div>
            </div>

        </menu>

        <menu className="flex flex-row w-full  pl-14 pr-16 pt-1 pb-1  justify-between text-slate-950 bg-gray-50 shadow-sm text-base">
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