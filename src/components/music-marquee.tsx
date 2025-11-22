"use client";

import MusicCard from "@/components/music-card";

type Track = {
  id: number;
  title: string;
  artist: string;
  coverArt: string;
  audioSrc: string;
};

type MusicMarqueeProps = {
  tracks: Track[];
};

export default function MusicMarquee({ tracks }: MusicMarqueeProps) {
  // Duplicate tracks for seamless infinite scroll (2 sets for smooth looping)
  const duplicatedTracks = [...tracks, ...tracks];

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)",
      }}
    >
      <div className="flex gap-[20px] animate-marquee">
        {duplicatedTracks.map((track, index) => (
          <div key={`${track.id}-${index}`} className="flex-shrink-0">
            <MusicCard
              title={track.title}
              artist={track.artist}
              coverArt={track.coverArt}
              audioSrc={track.audioSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
