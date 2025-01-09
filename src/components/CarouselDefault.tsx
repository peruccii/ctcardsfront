import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

const CarouselDefault = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const image_urls = useMemo(
    () => [
      'https://imgs.search.brave.com/NoD75TZoFJ7j2YyJBZcOkafwI-ZI3PzNa5Sxc7ycHn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9md21l/ZGlhLmZhbmRvbXdp/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA0LzMw/MDQ1NTA5L0JyYWQt/UGl0dC1hbmQtQW5n/ZWxpbmEtSm9saWUt/LTEtMTAyNHg3MzUu/anBlZw',
      'https://imgs.search.brave.com/Qn72HnX6jItIKJO4v_CE2nJjzV0QfiO9bnZQVXyHS8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sYS5jb20vdXMv/aG9yaXpvbi9vcmln/aW5hbF9hc3BlY3Rf/cmF0aW8vMjFiNTY1/NjdmNjQ1LWJyYWQt/cGl0dC1hbmdlbGlu/YS1qb2xpZS04NnRo/LWFjYWRlbXktYXdh/cmRzLW9zY2Fycy5q/cGc',
    ],
    [],
  );

  useEffect(() => {
    if (image_urls.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_urls.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [image_urls]);

  if (!image_urls || image_urls.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div
      className="carousel-container"
      style={{ position: 'relative', width: '250px', height: '250px' }}
    >
      {image_urls.map((url, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <Image
            src={url}
            alt={`Imagem ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="border-2 border-white/30 rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselDefault;
