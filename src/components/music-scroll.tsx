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
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { favoriteTracks } from "@/constant/const";
import { Spotify } from "@/constant/icons";

type Track = {
  id: number;
  title: string;
  artist: string;
  album: string;
  coverArt: string;
  audioSrc: string;
};

export default function FavoriteMusicSection() {
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftGradient(scrollLeft > 0);
        setShowRightGradient(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="relative">
          {showLeftGradient && (
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-black z-10"></div>
          )}
          {showRightGradient && (
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-black z-10"></div>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
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
      </div>
    </section>
  );
}
