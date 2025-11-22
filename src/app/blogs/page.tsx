"use client";

import BlogList from "@/components/blog-list";
import { blogPosts } from "@/constant/const";

export default function Blogs() {
  return (
    <div className="bg-[#121212] min-h-screen w-full flex items-start justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="h-full w-full">
          <div className="flex flex-col h-full items-start overflow-clip w-full">
            <div className="flex flex-col gap-[10px] items-start overflow-clip px-4 sm:px-6 md:px-8 lg:px-[30px] py-4 sm:py-6 md:py-[20px] w-full">
              <div className="flex gap-[10px] items-center w-full">
                <p className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
                  Blogs
                </p>
              </div>
              <BlogList blogs={blogPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
