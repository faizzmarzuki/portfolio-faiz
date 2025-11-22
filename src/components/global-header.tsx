"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const pathname = usePathname();

  const getLinkClassName = (href: string) => {
    const isActive = pathname === href || (href === "/" && pathname === "/");
    return `font-[family-name:var(--font-geist-mono)] ${
      isActive ? "font-bold text-[#d9d9d9]" : "font-normal text-[#9b9b9b]"
    } hover:text-[#d9d9d9] transition-colors`;
  };

  return (
    <div className="border-[#909090] border-b border-dashed border-l-0 border-r-0 border-t-0 relative w-full bg-[#121212] z-10">
      <div className="box-border content-stretch flex items-center justify-between px-[30px] py-[10px] relative w-full">
        <div className="content-stretch flex gap-[10px] items-center leading-normal relative shrink-0">
          <Link href="/">
            <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
              Faiz
            </p>
          </Link>
          <p className="font-[family-name:var(--font-geist-mono)] font-medium text-[#9b9b9b] text-sm">
            Software Engineer
          </p>
        </div>
        <div className="content-stretch flex gap-[50px] items-center leading-normal relative shrink-0 text-base">
          <Link href="/" className={getLinkClassName("/")}>
            Home
          </Link>
          <Link href="/blogs" className={getLinkClassName("/blogs")}>
            Blogs
          </Link>
          {/* <Link href="/project" className={getLinkClassName("/project")}>
            Project
          </Link> */}
          <Link href="/about-us" className={getLinkClassName("/about-us")}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
