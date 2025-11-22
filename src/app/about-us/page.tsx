"use client";

import MusicMarquee from "@/components/music-marquee";
import BucketList from "@/components/bucketlist";
import { favoriteTracks, bucketList } from "@/constant/const";

export default function AboutUs() {
  return (
    <div className="bg-[#121212] box-border flex gap-[10px] items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-row items-center self-stretch w-full max-w-7xl mx-auto">
        <div className="h-full relative shrink-0 w-full">
          <div className="content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-full">
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-4 sm:px-6 md:px-[30px] py-4 sm:py-6 md:py-[20px] relative shrink-0 w-full">
              <div className="content-stretch flex gap-8 md:gap-[225px] items-start relative shrink-0 w-full flex-col md:flex-row">
                <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#9b9b9b] text-base">
                  About Faiz
                </p>
                <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full md:w-[560px]">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="h-[284px] relative shrink-0 w-full">
                      <div
                        className="rounded-2xl absolute left-1/2 w-full max-w-xl inset-0 -translate-x-1/2 bg-neutral-100 bg-cover bg-center mx-auto lg:ml-0"
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1758028263330-6abd19323011')",
                        }}
                      >
                        <div className="w-full mx-auto left-1/2 -translate-x-1/2 absolute -bottom-20">
                          <img
                            src="https://avatars.githubusercontent.com/u/67745594?s=400&u=ca4e5407f8e38be1dcad5df7da7d2f2ba6ec5c45&v=4"
                            className="aspect-square rounded-full w-24 border-4 border-[#d9d9d9] dark:border-black"
                            alt="Faiz"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start leading-0 relative shrink-0 text-justify w-full">
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center text-[#9b9b9b] text-base text-justify tracking-[1.44px] w-full whitespace-pre-wrap mt-12">
                      <p className="mb-0 leading-normal">
                        Born on 20 May 1999 in Johor Bahru, Malaysia, I grew up
                        alongside the rise of social platforms and online games.
                        My journey with computers began at eight years old when
                        my brother created a MySpace account for me, which soon
                        led to Facebook and countless hours of playing
                        “Blackshot” with friends — the spark that pulled me into
                        the digital world.
                      </p>
                      <p className="mb-0 leading-normal">&nbsp;</p>
                      <p className="mb-0 leading-normal">
                        I earned my first money from tech by building an AR
                        learning project for a student using Unity and Vuforia.
                        Before that, I was the typical StackOverflow explorer,
                        fixing PHP and HTML issues with almost no real coding
                        background. Everything changed during my first
                        internship, where I discovered how powerful software
                        development could be and realized I wanted to pursue it
                        seriously.
                      </p>
                      <p className="mb-0 leading-normal">&nbsp;</p>
                      <p className="leading-normal">
                        Today, I work as a Full Stack Developer, but I prefer
                        the title Software Engineer. I’m self-taught, adaptable,
                        and driven by an entrepreneurial mindset that pushes me
                        to keep building and improving.
                      </p>
                    </div>
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-bold justify-center relative shrink-0 text-[#d9d9d9] text-lg tracking-[1.62px] w-full">
                      <p className="leading-normal whitespace-pre-wrap">
                        Experience
                      </p>
                    </div>
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#9b9b9b] text-base tracking-[1.44px] w-full">
                      <p className="leading-normal whitespace-pre-wrap">
                        Working as a Frontend Developer at WorkerzDirect Sdn Bhd
                        since 02/2024 until Now.
                      </p>
                    </div>
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-medium justify-center relative shrink-0 text-[#9b9b9b] text-base tracking-[1.44px] w-full">
                      <p className="leading-normal whitespace-pre-wrap">
                        In the past I worked at Auronex, Aztech IT Solutions. I
                        also did my internship at Affin Bank Berhad, Universiti
                        Kuala Lumpur MITEC.
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-bold justify-center leading-0 relative shrink-0 text-[#d9d9d9] text-lg text-justify tracking-[1.62px] w-full">
                      <p className="leading-normal whitespace-pre-wrap">
                        Bucketlist
                      </p>
                    </div>
                    <BucketList items={bucketList} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-[family-name:var(--font-geist-mono)] font-bold justify-center leading-0 relative shrink-0 text-[#d9d9d9] text-lg text-justify tracking-[1.62px] w-full">
                      <p className="leading-normal whitespace-pre-wrap">
                        Music
                      </p>
                    </div>
                    <div className="content-stretch relative shrink-0 w-full">
                      <MusicMarquee tracks={favoriteTracks} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
