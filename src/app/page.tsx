"use client"

import { CompanyCard } from "@/components/company-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experience } from "@/constant/const";
import { Github, LinkedIn, Twitter } from "@/constant/icons";

export default function Home() {
  return (
    <div className="p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-10 h-full">
        <div className="flex flex-col gap-10 w-full">
          <Avatar className="w-36 h-36">
            <AvatarImage src="https://avatars.githubusercontent.com/u/67745594?s=400&u=ca4e5407f8e38be1dcad5df7da7d2f2ba6ec5c45&v=4" />
            <AvatarFallback>Faiz</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              Mohammad Faiz Bin Marzuki
            </h1>
            <span className="text-xl font-light text-black dark:text-white">
              👋 Hi there! I'm a passionate Software Engineer with a strong
              focus on front-end technologies and UI/UX design. I love creating
              intuitive, user-friendly interfaces that elevate the overall
              experience. Explore my work to see how I blend functionality with
              creativity!
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            My Working Experience
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="https://www.linkedin.com/in/faizzmarzuki/">
          <LinkedIn />
        </a>
        <a href="https://x.com/0x4ca">
          <Twitter />
        </a>
        <a href="https://github.com/faizzmarzuki">
          <Github />
        </a>
      </footer>
    </div>
  );
}
