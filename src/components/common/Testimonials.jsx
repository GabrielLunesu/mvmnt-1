"use client"

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="py-6 pt-10 bg-white">
      <div className=" mx-auto px-4 ">
        
        <h2 className="text-4xl font-bold text-center mb-12 w-fit mx-auto text-white p-4 bg-purple-900 rounded-lg">Wat zeggen onze klanten?</h2>
     
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <InfiniteMovingCards items={testimonials} direction="left" speed="medium" />
            <InfiniteMovingCards items={testimonials.slice().reverse()} direction="right" speed="medium" />
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "It was the best of times, it was the worst of times. It was the best of times, it was the worst of times.It was the best of times, it was the worst of times.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver?format=750w"
  },
  {
    quote: "It was the best of times, it was the worst of times. It was the best of times, it was the worst of times.It was the best of times, it was the worst of times.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver?format=750w"
  },
  {
    quote: "It was the best of times, it was the worst of times. It was the best of times, it was the worst of times.It was the best of times, it was the worst of times.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver?format=750w"
  },
  {
    quote: "It was the best of times, it was the worst of times. It was the best of times, it was the worst of times.It was the best of times, it was the worst of times.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/2f93ecab-2aaa-4b12-af29-d0cb0eb2e368/Professional-Headshot-Vancouver?format=750w"
  },
];
