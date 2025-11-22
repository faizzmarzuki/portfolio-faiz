"use client";

import Image from "next/image";
import Link from "next/link";

type MusicCardProps = {
  title: string;
  artist: string;
  coverArt: string;
  audioSrc: string;
};

export default function MusicCard({
  title,
  artist,
  coverArt,
  audioSrc,
}: MusicCardProps) {
  return (
    <div className="border border-[#d9d9d9] border-solid relative shrink-0 w-[205px] overflow-hidden">
      <div className="flex flex-col items-start overflow-hidden relative w-[205px]">
        <div className="bg-[#6e6e6e] h-[154px] shrink-0 w-full relative overflow-hidden">
          {coverArt.includes(".svg") ? (
            <img
              src={coverArt}
              alt={`${title} by ${artist}`}
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src={coverArt}
              alt={`${title} by ${artist}`}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </div>
        <div className="box-border flex flex-col gap-[10px] items-start overflow-clip p-[10px] relative shrink-0 w-full">
          <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#d9d9d9] text-base w-full">
            <p className="leading-normal">{title}</p>
          </div>
          <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#d9d9d9] text-base w-full">
            <p className="leading-normal">{artist}</p>
          </div>
          <Link
            href={audioSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#d9d9d9] border-solid box-border flex gap-[10px] items-center justify-center p-[10px] relative shrink-0 w-full hover:bg-[#d9d9d9] transition-colors group"
          >
            <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#d9d9d9] text-base whitespace-nowrap group-hover:text-[#121212] transition-colors">
              <p className="leading-normal">Play on Spotify</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
