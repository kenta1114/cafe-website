import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Cafe interior ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            JMT CAFE
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            A perfect blend of comfort and style in GAIKANAYAMA
          </p>
          <a
            href="#menu"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors"
          >
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
}