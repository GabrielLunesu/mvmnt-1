"use client"

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className=" rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      {/* <h2 className="text-3xl font-bold text-center mb-8 z-10">What our customers are saying</h2> */}
      <div className="flex flex-col gap-16 w-full">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        <InfiniteMovingCards items={testimonials.slice().reverse()} direction="right" speed="slow" />
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
