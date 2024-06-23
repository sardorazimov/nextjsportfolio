"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { Inter } from "next/font/google";
import { AnimatedListDemo } from "./List";
import { Circul } from "./Circul";
import MarqueeDemo from "./AboutMarque";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export function About() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <AnimatedListDemo />
        <p>
          Notion Clone E-comerce and More Portfolio website (Nextjs ReactJs )
          <span className="text-neutral-400">
            Becoming a full stack developer involves mastering both frontend and backend development. Here’s a roadmap to guide you on your journey:
            Static Webpages:
            Learn HTML, CSS, and JavaScript for building static web pages.
            Interactivity:
            Understand npm (Node Package Manager) for managing external packages.
            Collaborative Work:
            Get familiar with Git and GitHub for version control and collaboration.
            Frontend Apps:
            Dive into React and Tailwind CSS for building interactive frontend applications.
            Backend Development:
            Choose a backend language (I recommend Node.js for JavaScript familiarity).
          </span>
        </p>
        <main className="py-3">
          <Circul />
          <p>
          Building a Full Stack Digital E-Commerce Next.js 14 App | React.js, Strapi, Tailwind CSS | Resending Email
           <span className="text-neutral-400">
           Welcome to this comprehensive tutorial on creating a robust Digital E-Commerce application 
           using Next.js 14! In this step-by-step guide, well dive into integrating React.js, Strapi, Tailwind CSS, and the essential process of resending emails within your application.
           </span>
          </p>
        </main>
        <div>
       <MarqueeDemo />
       <p>
       A database is an organized collection of structured information or data, typically stored electronically in a computer system. Here are some key points about databases:
        <span className="text-neutral-400">
        Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems
        </span>
       </p>
        </div>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">



            <div className="text-sm  prose prose-sm dark:prose-invert">


            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Notion Clone",
    description: (
      <>
        <p>
          Notion Clone. Create and Edit Notes like in Notion. This clone tries to replicate some of the great note-taking features Notion has. If you dont know Notion.so yet, I highly recommend to check it out! 📌
          Live Demo: notion-clone.kmuenster.com. 📌 Medium Article: How To Build A ….
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          · Notion Clone API built with TypeScript and MongoDB, using TDD, Clean Architecture, SOLID principles, and Design Patterns.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/notion.jpg"
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      ''
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "/",
  },
];
