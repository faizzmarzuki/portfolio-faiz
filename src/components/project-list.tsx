"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce platform built with Next.js and Tailwind CSS.",
    thumbnail: "/placeholder.svg?height=400&width=300",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    thumbnail: "/placeholder.svg?height=400&width=300",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    id: "project-3",
    title: "AI-powered Chatbot",
    description:
      "An intelligent chatbot leveraging natural language processing for customer support.",
    thumbnail: "/placeholder.svg?height=400&width=300",
    tags: ["Python", "TensorFlow", "NLP"],
  },
  {
    id: "project-4",
    title: "Fitness Tracking App",
    description:
      "A mobile app for tracking workouts and nutrition with personalized recommendations.",
    thumbnail: "/placeholder.svg?height=400&width=300",
    tags: ["React Native", "Firebase", "Machine Learning"],
  },
  {
    id: "project-5",
    title: "Smart Home Dashboard",
    description:
      "A centralized dashboard for controlling and monitoring smart home devices.",
    thumbnail: "/placeholder.svg?height=400&width=300",
    tags: ["IoT", "React", "Node.js"],
  },
];

export default function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <>
      <div className="space-y-8">
        {visibleProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
                <CardFooter>
                  <Link href={`/projects/${project.id}`}>
                    <Button>Learn More</Button>
                  </Link>
                </CardFooter>
              </div>
              <div className="md:w-1/3 relative">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-transform duration-300 ${
                    hoveredProject === project.id ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      {projects.length > 3 && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="shadow-lg px-6 py-3 rounded-full"
            aria-label={
              showAllProjects ? "Show less projects" : "Show more projects"
            }
          >
            {showAllProjects ? (
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
