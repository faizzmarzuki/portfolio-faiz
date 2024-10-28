"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";

// Add these custom classes to your Tailwind config or use arbitrary values
const flipCardClasses = {
  perspective: "perspective-1000",
  "preserve-3d": "[transform-style:preserve-3d]",
  "backface-hidden": "[backface-visibility:hidden]",
  "rotate-y-180": "[transform:rotateY(180deg)]",
};

export default function Flipcard({
  imageUrl = "/placeholder.svg?height=400&width=300",
  imageDate = new Date(),
}: {
  imageUrl?: string;
  imageDate?: Date;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${flipCardClasses["perspective"]} w-[300px] h-[400px] cursor-pointer`}
      onClick={handleFlip}
    >
      <div
        className={`relative w-[300px] h-[400px] transition-transform duration-500 ${
          flipCardClasses["preserve-3d"]
        } ${isFlipped ? flipCardClasses["rotate-y-180"] : ""}`}
      >
        <div
          className={`absolute w-[300px] h-[400px] ${flipCardClasses["backface-hidden"]}`}
        >
          <Card className="w-[300px] h-[400px]">
            <img
              src={imageUrl}
              alt="Flipcard front"
              className="w-[300px] h-[400px] object-cover rounded-lg"
            />
          </Card>
        </div>
        <div
          className={`absolute w-[300px] h-[400px] ${flipCardClasses["backface-hidden"]} ${flipCardClasses["rotate-y-180"]}`}
        >
          <Card className="w-[300px] h-[400px] flex items-center justify-center bg-primary text-primary-foreground">
            <span className="text-2xl font-bold">
              {format(imageDate, "MMMM d, yyyy")}
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}
