import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
    return ( 
        <div className="flex flex-col w-full bg-zinc-950 text-white pt-6">
            <div className="flex flex-row items-start justify-evenly w-10/12 m-auto">
                <div className="w-1/5 ">
                    <h1 className="text-xl">CONNECT WITH US</h1>
                    <div className="flex flex-row items-center mb-2 mt-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <IoLocation className="bg-zinc-950"/>
                        </div>
                        <div className="ml-2 text-l">
                            <address>Opposite Mirema drive </address>
                            <address>around khetias</address>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mb-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <FaPhoneAlt className="bg-zinc-950"/>
                        </div>
                        <div className="ml-2 text-l"> 
                            <address>+1 800 559 6580</address>
                            <address>+1 504 889 9898</address>
                        </div>
                    </div >
                    <div className="flex flex-row items-center mb-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <MdEmail className="bg-zinc-950"/>
                        </div>
                        <div className="ml-2 text-l">
                            <address>mail@demolink.org</address>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 flex flex-col justify-between"> 
                    <h1 className="text-xl mb-2">SUBCRIBE TO NEWSLETTER</h1>
                    <div className="w-4/5 mb-3">
                        <form action="" >
                            <input type="input" name="" id="" className="mr-2 border-b bg-zinc-950 border-white focus:bg-white focus:text-black focus:outline-none"/>
                            <button className="ml-2 pt-1 pb-1 pl-3 pr-3 rounded-sm shadow-wh">Subcribe</button>
                        </form>
                    </div>
                    <div className="w-4/5 mb-3">
                        <p>
                            Sign up to get exclusive offers from our favorite brands and to be well up in the news
                        </p>
                    </div>
                    <div className="w-1/3 mb-3 flex flex-row justify-evenly items-center"> 
                        <div className="bg-slate-300 font-semibold text-3xl text-center mr-2" >
                            <FaCcVisa className="bg-zinc-950"/>
                        </div>
                        <div className="bg-slate-300 font-semibold text-3xl text-center mr-2" > 
                            <FaCcMastercard className="bg-zinc-950"/>
                        </div>
                        <div className="bg-slate-300 font-semibold text-3xl text-center mr-2" >
                            <FaPaypal className="bg-zinc-950"/>
                        </div>
                    </div>
                </div>

                <div className="w-1/5 flex flex-col ">
                    <h1 className="text-xl">SOCIAL</h1>
                    <div>
                        <Link href="#" className="flex flex-row items-center mb-2 mt-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <FaFacebookSquare className="bg-zinc-950"/> 
                        </div>
                        <p className="ml-2 text-l">Facebook</p>
                        </Link>

                        <Link href="#" className="flex flex-row items-center mb-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <FaXTwitter className="bg-zinc-950"/>
                        </div>
                        <p className="ml-2 text-l">Twitter</p>
                        </Link>

                        <Link href="#" className="flex flex-row items-center mb-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <FaTelegram className="bg-zinc-950"/>
                        </div>
                        <p className="ml-2 text-l">Telegram</p>
                        </Link>

                        <Link href="#" className="flex flex-row items-center mb-2">
                        <div className="bg-slate-300 font-semibold text-2xl text-center mr-2">
                            <FaInstagram className="bg-zinc-950"/>
                        </div>
                        <p className="ml-2 text-l">Instagram</p>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex flex-col items-center bg-zinc-800 p-2">
                    <p>© 2024 yerunostore</p>    
            </div>
        </div>
     );
}
 
export default Footer;