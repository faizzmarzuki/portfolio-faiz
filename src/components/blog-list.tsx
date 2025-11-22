"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/constant/const";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogListProps = {
  blogs: BlogPost[];
};

export default function BlogList({ blogs }: BlogListProps) {
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="space-y-8">
        {visibleBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
            className="block group"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start w-full p-4 sm:p-6 rounded-lg hover:bg-white/5 transition-colors duration-300">
              {blog.thumbnail && (
                <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="flex flex-col gap-[10px] w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-xl group-hover:text-white transition-colors">
                    {blog.title}
                  </h3>
                  <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#9b9b9b] text-sm">
                    {formatDate(blog.publishedAt)} · {blog.author}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-sm whitespace-pre-wrap">
                  {blog.description}
                </p>
                <div className="flex gap-[10px] items-start flex-wrap">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#5ea6ff]/20 border border-[#5ea6ff]/50 text-[#5ea6ff] rounded-full text-xs font-[family-name:var(--font-geist-mono)] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {blogs.length > 3 && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => setShowAllBlogs(!showAllBlogs)}
            className="shadow-lg px-6 py-3 rounded-full bg-[#5ea6ff] hover:bg-[#4a8fdd] text-white font-[family-name:var(--font-geist-mono)]"
            aria-label={
              showAllBlogs ? "Show less blogs" : "Show more blogs"
            }
          >
            {showAllBlogs ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </>
  );
}

