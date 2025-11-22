"use client";

import Link from "next/link";

export default function AboutNavbar() {
  return (
    <div className="border-[#909090] border-b border-dashed border-l-0 border-r-0 border-t-0 w-full">
      <div className="box-border flex items-center justify-between overflow-clip px-[30px] py-[10px] w-full">
        <div className="flex gap-[10px] items-center">
          <Link href="/">
            <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
              Faiz
            </p>
          </Link>
          <p className="font-[family-name:var(--font-geist-mono)] font-medium text-[#9b9b9b] text-sm">
            Software Engineer
          </p>
        </div>
        <div className="flex gap-[50px] items-center text-base">
          <Link
            href="/"
            className="font-[family-name:var(--font-geist-mono)] font-normal text-[#9b9b9b] hover:text-[#d9d9d9] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="font-[family-name:var(--font-geist-mono)] font-normal text-[#9b9b9b] hover:text-[#d9d9d9] transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/project"
            className="font-[family-name:var(--font-geist-mono)] font-normal text-[#9b9b9b] hover:text-[#d9d9d9] transition-colors"
          >
            Project
          </Link>
          <Link
            href="/about-us"
            className="font-[family-name:var(--font-geist-mono)] font-medium text-[#d9d9d9] hover:text-[#9b9b9b] transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
