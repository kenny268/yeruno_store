'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ProductsPage = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const images = ['/automotive.jpg','/banner.jpg','/beverages.jpg','/computer.jpg','/electronics.jpg'];
    
    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false); // Slide out visibility after 4.5 seconds
        }, 4500);
        
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
            
            <div className={`absolute top-1/3 w-96 left-1/3 bg-black p-3 bg-opacity-35 rounded-sm shadow-md' ${isVisible ? 'opacity-100 transition-opacity duration-500 ease-in-out' : 'opacity-0 transition-opacity duration-500 ease-in-out'}`}>
              <h1 className='text-3xl text-white font-semibold'>Your Store</h1>
              <p className='text-white'>Discover endless wholesale possibilities with Yeruno - where quality meets affordability, catering to all your business needs effortlessly.</p>
               <button className='text-white pt-1 pb-1 pr-2 pl-2 rounded-sm shadow-md bg-rose-700'>Shop Now</button> 
            </div>
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