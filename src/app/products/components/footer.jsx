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


const Footer = () => {
    return ( 
        <div>
            <div>
                <div>
                    <h1>NAVIGATE</h1>
                    <p>Search</p>
                </div>

                <div>
                    <h1>CONNECT WITH US</h1>
                    <div>
                        <div>
                            <IoLocation />
                        </div>
                        <div>
                            <address>Opposite Mirema drive </address>
                            <address>around khetias</address>
                        </div>
                    </div>
                    <div>
                        <div>
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <address>+1 800 559 6580</address>
                            <address>+1 504 889 9898</address>
                        </div>
                    </div>
                    <div>
                        <MdEmail />
                        <address>mail@demolink.org</address>
                    </div>
                </div>

                <div>
                    <h1>SUBCRIBE TO NEWSLETTER</h1>
                    <div>
                        <form action="">
                            <input type="input" name="" id="" />
                            <button>Subcribe</button>
                        </form>
                    </div>
                    <div>
                    Sign up to get exclusive offers from our favorite brands and to be well up in the news
                    </div>
                    <div>
                        <FaCcVisa />
                        <FaCcMastercard />
                        <FaPaypal />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h1>Social</h1>
                    <FaXTwitter />
                    <FaFacebookSquare />
                    <FaTelegram />
                    <FaInstagram />
                </div>

            </div>
            <div>
                    <p>© 2024 yerunostore</p>    
            </div>
        </div>
     );
}
 
export default Footer;