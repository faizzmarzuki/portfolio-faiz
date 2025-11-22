"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts } from "@/constant/const";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#121212] min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col gap-[20px] items-center justify-center px-4 sm:px-6 md:px-8 lg:px-[30px] py-4 sm:py-6 md:py-8">
            <h1 className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-3xl">
              Blog Not Found
            </h1>
            <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#9b9b9b] text-base">
              The blog post you're looking for doesn't exist.
            </p>
            <Link href="/blogs">
              <Button
                variant="ghost"
                className="font-[family-name:var(--font-geist-mono)] text-[#9b9b9b] hover:text-[#d9d9d9] mt-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentParagraph: (string | JSX.Element)[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLanguage = "";
    let elementKey = 0;

    const renderInlineMarkdown = (text: string): (string | JSX.Element)[] => {
      const parts: (string | JSX.Element)[] = [];
      // Combined regex to match both code and bold (non-greedy to handle multiple matches)
      const combinedRegex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
      let lastIndex = 0;
      let match;

      while ((match = combinedRegex.exec(text)) !== null) {
        // Add text before the match
        if (match.index > lastIndex) {
          const beforeText = text.substring(lastIndex, match.index);
          if (beforeText) {
            parts.push(beforeText);
          }
        }

        const matchedText = match[0];
        // Handle inline code
        if (matchedText.startsWith("`") && matchedText.endsWith("`")) {
          parts.push(
            <code
              key={`code-${elementKey++}`}
              className="bg-[#1a1a1a] border border-[#333] rounded px-1.5 py-0.5 text-[#5ea6ff] font-[family-name:var(--font-geist-mono)] text-sm"
            >
              {matchedText.slice(1, -1)}
            </code>
          );
        }
        // Handle bold text
        else if (matchedText.startsWith("**") && matchedText.endsWith("**")) {
          parts.push(
            <strong
              key={`bold-${elementKey++}`}
              className="font-bold text-[#d9d9d9]"
            >
              {matchedText.slice(2, -2)}
            </strong>
          );
        } else {
          parts.push(matchedText);
        }

        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < text.length) {
        const remainingText = text.substring(lastIndex);
        if (remainingText) {
          parts.push(remainingText);
        }
      }

      return parts.length > 0 ? parts : [text];
    };

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <pre
              key={`code-block-${elementKey++}`}
              className="bg-[#1a1a1a] border border-[#333] rounded-lg p-4 overflow-x-auto my-4"
            >
              <code className="font-[family-name:var(--font-geist-mono)] text-sm text-[#d9d9d9] whitespace-pre">
                {codeBlockContent.join("\n")}
              </code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          // Start code block
          if (currentParagraph.length > 0) {
            elements.push(
              <p
                key={`p-${elementKey++}`}
                className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
              >
                {currentParagraph}
              </p>
            );
            currentParagraph = [];
          }
          codeBlockLanguage = line.replace("```", "").trim();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Handle headings
      if (line.startsWith("# ")) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p
              key={`p-${elementKey++}`}
              className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
            >
              {currentParagraph}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h1
            key={`h1-${elementKey++}`}
            className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-3xl mb-4 mt-8"
          >
            {line.replace("# ", "")}
          </h1>
        );
        return;
      }

      if (line.startsWith("## ")) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p
              key={`p-${elementKey++}`}
              className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
            >
              {currentParagraph}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h2
            key={`h2-${elementKey++}`}
            className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-2xl mb-4 mt-6"
          >
            {line.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        if (currentParagraph.length > 0) {
          elements.push(
            <p
              key={`p-${elementKey++}`}
              className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
            >
              {currentParagraph}
            </p>
          );
          currentParagraph = [];
        }
        elements.push(
          <h3
            key={`h3-${elementKey++}`}
            className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-xl mb-4 mt-4"
          >
            {line.replace("### ", "")}
          </h3>
        );
        return;
      }

      // Handle empty lines
      if (line.trim() === "") {
        if (currentParagraph.length > 0) {
          elements.push(
            <p
              key={`p-${elementKey++}`}
              className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
            >
              {currentParagraph}
            </p>
          );
          currentParagraph = [];
        }
        return;
      }

      // Handle inline code, bold text, and regular text
      const processedParts = renderInlineMarkdown(line);
      currentParagraph.push(...processedParts);
    });

    // Add remaining paragraph
    if (currentParagraph.length > 0) {
      elements.push(
        <p
          key={`p-${elementKey++}`}
          className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-base leading-relaxed mb-4"
        >
          {currentParagraph}
        </p>
      );
    }

    return elements;
  };

  return (
    <div className="bg-[#121212] min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="h-full w-full">
          <div className="flex flex-col h-full items-start overflow-clip w-full">
            <div className="flex flex-col gap-[20px] items-start overflow-clip px-4 sm:px-6 md:px-8 lg:px-[30px] py-4 sm:py-6 md:py-8 w-full">
              {/* Back button */}
              <Link href="/blogs">
                <Button
                  variant="ghost"
                  className="font-[family-name:var(--font-geist-mono)] text-[#9b9b9b] hover:text-[#d9d9d9] mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blogs
                </Button>
              </Link>

              {/* Blog header */}
              <div className="flex flex-col gap-[10px] w-full">
                <h1 className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-3xl sm:text-4xl">
                  {blog.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                  <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#9b9b9b] text-sm">
                    {formatDate(blog.publishedAt)}
                  </p>
                  <span className="hidden sm:inline text-[#9b9b9b]">·</span>
                  <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#9b9b9b] text-sm">
                    {blog.author}
                  </p>
                </div>
                {blog.thumbnail && (
                  <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mt-4">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="flex gap-[10px] items-start flex-wrap mt-2">
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

              {/* Blog content */}
              <div className="w-full mt-8 prose prose-invert max-w-none">
                <article className="blog-content">
                  {renderContent(blog.content)}
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
