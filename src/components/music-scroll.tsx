"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spotify } from "@/constant/icons";
import { favoriteTracks } from "@/constant/const";

export default function FavoriteMusicSection() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
      handleScroll(); // Initial check
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
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-5 items-center pb-4">
          {favoriteTracks.map((track) => (
            <Card
              key={track.id}
              className="flex-shrink-0 w-64 sm:w-48 md:w-56 lg:w-64 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <Image
                  src={track.coverArt}
                  alt={`${track.album} cover`}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg truncate">
                  {track.title}
                </CardTitle>
                <CardDescription className="truncate">
                  {track.artist}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => {
                    window.location.href = track.audioSrc;
                  }}
                  className="w-full"
                >
                  Spotify <Spotify />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Right gradient overlay */}
      <div
        className={`absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent dark:from-black pointer-events-none transition-opacity duration-300 ${
          isAtEnd ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Left gradient overlay */}
      <div
        className={`absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white to-transparent dark:from-black pointer-events-none transition-opacity duration-300 ${
          isAtStart ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
