"use client";

import Image from "next/image";

type ProjectTag = {
  label: string;
  type: "frontend" | "backend" | "uiux";
};

type SelectedProject = {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  imageUrl: string;
  imageBgColor: string;
};

type SelectedWorkProps = {
  projects: SelectedProject[];
};

const tagStyles = {
  frontend: {
    bg: "bg-[#7bff5e]",
    border: "border-[#188300]",
    text: "text-[#188300]",
  },
  backend: {
    bg: "bg-[#5ea6ff]",
    border: "border-[#004483]",
    text: "text-[#004483]",
  },
  uiux: {
    bg: "bg-[#ffd0d0]",
    border: "border-[#ff6767]",
    text: "text-[#ff6767]",
  },
};

export default function SelectedWork({ projects }: SelectedWorkProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row gap-[10px] items-start w-full"
        >
          <div className="flex flex-col gap-[10px] justify-center w-full md:w-[509px] md:flex-shrink-0">
            <h3 className="font-[family-name:var(--font-geist-mono)] font-bold text-[#d9d9d9] text-base">
              {project.title}
            </h3>
            <p className="font-[family-name:var(--font-geist-mono)] font-light text-[#d9d9d9] text-sm whitespace-pre-wrap">
              {project.description}
            </p>
            <div className="flex gap-[10px] items-start flex-wrap">
              {project.tags.map((tag, index) => {
                const style = tagStyles[tag.type];
                return (
                  <div
                    key={index}
                    className={`${style.bg} border-2 ${style.border} border-solid box-border flex gap-[10px] items-center justify-center p-[10px] rounded-[50px]`}
                  >
                    <p
                      className={`font-[family-name:var(--font-geist-mono)] font-semibold ${style.text} text-sm`}
                    >
                      {tag.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${project.imageBgColor} flex-1 min-w-0 h-[300px] sm:h-[350px] md:h-[384px] min-h-[300px] sm:min-h-[350px] md:min-h-[384px] overflow-hidden relative w-full md:w-auto flex items-center justify-center rounded-none`}
          >
            {project.imageUrl.includes(".svg") ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-contain w-full h-full p-4 rounded-none"
              />
            ) : (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="object-contain w-full h-full p-4 rounded-none"
                unoptimized
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
