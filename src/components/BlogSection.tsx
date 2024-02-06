import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    img: "/post__1.jpg",
    title:
      "Face Forward: Exploring the Power and Perception of Facial Expressions",
    date: "March 23, 2023",
    comments: 8,
  },
  {
    img: "/post__2.jpg",
    title: "Scented Serenity: Unlocking the Potential of Essential Oils",
    date: "April 18, 2023",
    comments: 1,
  },
  {
    img: "/post__3.jpg",
    title: "Essence of Elegance: The Art and Science of Perfumery",
    date: "May 25, 2023",
    comments: 6,
  },
];

export default function BlogSection() {
  return (
    <div className="container pt-32">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="textgray-500">
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.title}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comments}
          />
        ))}
      </div>
    </div>
  );
}
