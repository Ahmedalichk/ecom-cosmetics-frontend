"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Cart from "@/components/Cart";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Glamify Cosmo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showCart, setShowCart] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar setShowCart={setShowCart} />
          {showCart && <Cart setShowCart={setShowCart} />}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
