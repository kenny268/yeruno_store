import React, { useState, useEffect } from 'react';
import useFetch from './useFetchData';

const MyComponent = (uri) => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(uri);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      // Concatenate new data with existing items
      setItems(prevItems => [...prevItems, ...data]);
    }
  }, [data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // Load more data when user reaches the bottom of the page
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{/* Render your item here */}</div>
      ))}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default MyComponent;
