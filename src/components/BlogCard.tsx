import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  comment: string | number;
  date: string;
}

export default function BlogCard({ img, title, comment, date }: propsType) {
  return (
    <div className="space-y-4">
      <Image
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
        width={500}
        height={500}
      />
      <div className="text-accent font-medium">
        <span>{date} / </span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}
