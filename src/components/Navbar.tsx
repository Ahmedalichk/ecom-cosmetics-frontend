"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar({ setShowCart }: any) {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  return (
    <div className="bg-white py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <RxHamburgerMenu className="sm:hidden text-[26px]" />
        <Link href="/" className="text-4xl font-semibold ">
          <span className="text-blue-500 hover:text-accent">
            Glamify<span className="text-black hover:text-accent">Cosmo</span>
          </span>
        </Link>
        <ul className="gap-6 hidden sm:flex">
          <Link href="/" className="navlink">
            Home
          </Link>
          <li className="navlink">Shop</li>
          <li className="navlink">Blog</li>
          <li className="navlink">Pages</li>
          <li className="navlink">Contact</li>
        </ul>
        <div className="flex gap-6 text-[26px]">
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShoppingCart />
            <div
              className="absolute top-[-15px] right-[-10px] bg-red-600 w-[21px] h-[21px] rounded-full
             text-white text-[14px] grid place-items-center"
            >
              {cartCount}
            </div>
          </div>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
}
