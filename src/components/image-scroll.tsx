import { useRef, useState, useEffect } from "react";
import Flipcard from "./flip-image";

interface FlipcardProps {
  imageUrl: string;
  imageDate: Date;
}

interface ImageScrollWithGradientProps {
  images: FlipcardProps[];
}

export default function ImageScrollWithGradient({
  images,
}: ImageScrollWithGradientProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const atEnd =
          container.scrollWidth - container.scrollLeft <= container.clientWidth;
        const atStart = container.scrollLeft === 0;

        setIsAtEnd(atEnd);
        setIsAtStart(atStart);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        className="overflow-x-auto custom-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex gap-5 items-center pb-4">
          {images.map((item, index) => (
            <Flipcard
              key={index}
              imageUrl={item.imageUrl}
              imageDate={item.imageDate}
            />
          ))}
        </div>
      </div>

      {/* Right gradient overlay */}
      <div
        className={`absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none transition-opacity duration-300 ${
          isAtEnd ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Left gradient overlay */}
      <div
        className={`absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none transition-opacity duration-300 ${
          isAtStart ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
