import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="container relative pt-16">
      <Image
        className="w-[100%] h-auto"
        src="/hero.png"
        alt="Hero img"
        width={1500}
        height={980}
      />
      <div
        className="hidden sm:block absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-50 w-[250px]
      h-[200px] space-y-3 lg:w-[300px] lg:h-[270px] lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8 rounded-md shadow-lg "
      >
        <h2 className="text-[16px] lg:text-[24px] xl:text-[30px] leading-tight">
          Velvet Crimson: Eclipsed Elegance Lip Color
        </h2>
        <p className="text-gray-600 text-[14px] xl:text-[16px] ">
          Unveil your inner allure with this decadent fusion of velvety texture.
        </p>
        <button
          className="bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2 xl:py-4 px-8 rounded-md 
        hover:bg-accent"
        >
          shop now
        </button>
      </div>
    </div>
  );
}
