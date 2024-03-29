import Link from "next/link";

const SideNav = () => {
    return (  
        <div>
            <h1 className="font-medium text-2xl">Category</h1>
            <nav>
                <div>
                    <Link href="#">Automotive </Link>
                </div>
                <div>
                    <Link href="#"> Books and Media</Link>
                </div>
                <div>
                    <Link href="#">Clothing </Link>
                </div>
                <div>
                    <Link href="#">Computer And Accesories</Link>
                </div>
                <div>
                    <Link href="#">Electronics </Link>
                </div>
                <div>
                    <Link href="#">Food and Drinks</Link>
                </div>
                <div>
                    <Link href="#">Health and Beauty</Link>
                </div>
                <div>
                    <Link href="#">Home and Garden</Link>
                </div>
                <div>
                    <Link href="#">Jewelry and Watches</Link>
                </div>
                <div>
                    <Link href="#">Music and Audio</Link>
                </div>
                <div>
                    <Link href="#">Office Supplies</Link>
                </div>
                <div>
                    <Link href="#">Toys and Games</Link>
                </div>
                <div>
                    <Link href="#">Video Games</Link>
                </div>
                <div>
                    <Link href="#">Sport and Outdoors</Link>
                </div>

            </nav>
        </div>
    );
}

export default SideNav;