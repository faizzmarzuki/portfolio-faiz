"use client";

import { CompanyCard } from "@/components/company-card";
import Flipcard from "@/components/flip-image";
import ImageScrollWithGradient from "@/components/image-scroll";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { experience, images } from "@/constant/const";
import { Github, LinkedIn, Twitter } from "@/constant/icons";

export default function Home() {
  return (
    <div
      className="p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]"
      suppressHydrationWarning
    >
      <main className="flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-10 w-full md:flex-row md:container md:mx-auto md:px-4 md:py-4 md:justify-between md:items-center">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://avatars.githubusercontent.com/u/67745594?s=400&u=ca4e5407f8e38be1dcad5df7da7d2f2ba6ec5c45&v=4" />
            <AvatarFallback>Faiz</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Mohammad Faiz Bin Marzuki
            </h1>
            <span className="text-xl font-light text-black dark:text-white">
              Hi there! I'm a passionate Software Engineer with a strong focus
              on front-end technologies and UI/UX design. I love creating
              intuitive, user-friendly interfaces that elevate the overall
              experience. Explore my work to see how I blend functionality with
              creativity!
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:container md:mx-auto md:px-4 md:py-4 md:justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Experience
          </h1>
          <div className="flex flex-col gap-5">
            {experience.map((item, index) => (
              <CompanyCard
                key={index} // using index as a key, but consider a unique ID if available
                src={item.src}
                fallback={item.fallback}
                companyName={item.companyName}
                position={item.position}
                location={item.location}
                duration={item.duration}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:container md:mx-auto md:px-4 md:py-4 md:justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Project
          </h1>
          <div className="flex flex-col gap-5 items-center">
            I'm still cooking on this sections🍳
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:container md:mx-auto md:px-4 md:py-4 md:justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Hobby
          </h1>
          <div className="flex flex-col gap-5 items-center">
            I'm still cooking on this sections🍳
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:container md:mx-auto md:px-4 md:py-4 md:justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Music
          </h1>
          <div className="flex flex-col gap-5 items-center">
            I'm still cooking on this sections🍳
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:container md:mx-auto md:px-4 md:py-4 md:justify-between">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Gallery
          </h1>
          <ImageScrollWithGradient images={images} />
        </div>
      </main>
      <footer className="flex flex-col items-center gap-5">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a href="https://www.linkedin.com/in/faizzmarzuki/">
            <LinkedIn />
          </a>
          <a href="https://x.com/0x4ca">
            <Twitter />
          </a>
          <a href="https://github.com/faizzmarzuki">
            <Github />
          </a>
        </div>
        <span>Faiz © 2024</span>
      </footer>
    </div>
  );
}
