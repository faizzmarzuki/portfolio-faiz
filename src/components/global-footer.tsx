"use client";

import Link from "next/link";

export default function GlobalFooter() {
  return (
    <>
      <div className="border-[#909090] border-b-0 border-dashed border-l-0 border-r-0 border-t relative shrink-0 w-full bg-[#121212]">
        <div className="box-border content-stretch flex items-start justify-between overflow-clip p-[30px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center leading-normal relative shrink-0 text-base">
            <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9]">
              Faiz's personal site
            </p>
            <p className="font-[family-name:var(--font-geist-mono)] font-normal text-[#9b9b9b]">
              Building something stupid but it works.
            </p>
          </div>
          <div className="content-stretch flex gap-[50px] items-start relative shrink-0">
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
              <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
                Pages
              </p>
              <div className="content-stretch flex flex-col font-[family-name:var(--font-geist-mono)] font-medium gap-[10px] items-start leading-normal relative shrink-0 text-base">
                <Link
                  href="/"
                  className="text-[#d9d9d9] hover:text-[#9b9b9b] transition-colors"
                >
                  /Home
                </Link>
                <Link
                  href="/project"
                  className="text-[#6b6b6b] hover:text-[#d9d9d9] transition-colors"
                >
                  Project
                </Link>
                <Link
                  href="/about-us"
                  className="text-[#6b6b6b] hover:text-[#d9d9d9] transition-colors"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0">
              <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
                Connect
              </p>
              <div className="content-stretch flex flex-col font-[family-name:var(--font-geist-mono)] font-medium gap-[10px] items-start leading-normal relative shrink-0 text-[#6b6b6b] text-base">
                <a
                  href="https://x.com/0x4ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d9d9d9] transition-colors"
                >
                  x.com
                </a>
                <a
                  href="https://www.linkedin.com/in/faizzmarzuki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d9d9d9] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:faiz@example.com"
                  className="hover:text-[#d9d9d9] transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://github.com/faizzmarzuki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d9d9d9] transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#909090] border-b-0 border-dashed border-l-0 border-r-0 border-t relative shrink-0 w-full bg-[#121212]">
        <div className="box-border content-stretch flex items-start justify-between overflow-clip p-[30px] relative rounded-[inherit] w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
            <p className="font-[family-name:var(--font-geist-mono)] font-medium text-[#9b9b9b] text-base">
              Privacy Policy
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0">
            <p className="font-[family-name:var(--font-geist-mono)] font-medium text-[#9b9b9b] text-base">
              Copyright Faiz 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
