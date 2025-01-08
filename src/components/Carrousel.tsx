import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const Carousel = ({
  images,
  plan,
}: {
  images: File[] | null;
  plan?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image_urls, setImageURLs] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const maxImages = params.get('plan') || plan === 'PREMIUM' ? 7 : 3;

  useEffect(() => {
    if (images) {
      const urls = images
        .slice(0, maxImages)
        .map((image) => URL.createObjectURL(image));
      setImageURLs(urls);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    } else {
      setImageURLs([]);
    }
  }, [images, maxImages]);

  useEffect(() => {
    if (image_urls.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % image_urls.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [image_urls]);

  if (!image_urls || image_urls.length === 0) {
    return <p></p>;
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

export default Carousel;
