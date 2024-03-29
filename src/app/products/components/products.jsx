'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ProductsPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['/automotive.jpg','/banner.jpg','/beverages.jpg','/computer.jpg','/electronics.jpg'];

    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, [images.length]);

      const goToPreviousImage = () => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const goToNextImage = () => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

   

    return (  
        <div className='shadow-md  mr-6'>
        <main className=''>
            <div >
                <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}              
                width={200}
                height={100}
                priority={true}
                loading="eager"
                quality={100}
                unoptimized = {false}
                className="w-full h-80 rounded-sm bg-cover"
                />
            </div>
            <button onClick={goToPreviousImage} className='absolute top-2/4 bg-slate-500 p-2 hover:bg-rose-700 hover:text-white'> <IoIosArrowBack className="w-8 h-5 rounded-sm hover:text-white"/></button>

            <button onClick={goToNextImage} className='absolute top-2/4 right-6 bg-slate-500 p-2  hover:bg-rose-700 hover:text-white'><IoIosArrowForward  className="w-8 h-5 rounded-sm hover:text-white"/></button>

            <div>
                

            </div>
            <div>
                <h1>Best Seller</h1>
            </div>
            <div>
                <h1>Your recently Viewed products</h1>

            </div>
            <div>
                <h1>ALl new Sale</h1>
            </div>
            <div>
                <h1>General Items</h1>
            </div>
            <div>
                <h1>Buying Guide</h1>
            </div>
            <div>
                <h1>Sell Your Products</h1>
            </div>
        </main>
    </div>
    );
}
 
export default ProductsPage;