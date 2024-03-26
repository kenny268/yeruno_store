'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";

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
        <div>
        <main>
            <div>
                <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}              
                width={200}
                height={300}
                priority={true}
                style={{ width: "auto", height: "100%" }}
                />
            </div>
            <button
                onClick={goToPreviousImage}
            >&lt; Prev</button>

            <button
                onClick={goToNextImage}
            >Next &gt;</button>

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