"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

// Product interface defining categories and media types
interface Product {
  id: string;
  name: string;
  category: "Dress" | "Tops" | "Hats" | "Bottoms" | "Tapestry Masterpieces";
  price: string;
  mediaType: "image" | "video";
  mediaUrl: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Ewia Kete Hat",
    category: "Hats",
    price: "$280",
    mediaType: "image",
    mediaUrl: "/trinity hat.mp4", // Static asset mapping verified
    description: "Handcrafted tapestry crochet hat inspired by golden morning light and geometric motifs.",
  },
  {
    id: "2",
    name: "Kwame Nkrumah Masterpiece",
    category: "Tapestry Masterpieces",
    price: "$2,400",
    mediaType: "image",
    mediaUrl: "/nkrumah.jpg",
    description: "High-fidelity gridded portraiture tapestry honoring historical heritage.",
  },
];

const categories = ["All", "Dress", "Tops", "Hats", "Bottoms", "Tapestry Masterpieces"] as const;

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#121110] text-[#f4f2ed] font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#121110]/90 backdrop-blur-md border-b border-[#2a2720] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-serif text-xl tracking-wider text-white">ONYXX THREADS</h1>
          <span className="hidden sm:inline-block text-xs font-mono text-[#c5a059] uppercase tracking-widest border-l border-[#2a2720] pl-3">
            Accra, Ghana
          </span>
        </div>

        {/* Clerk Auth and Profile Actions */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3.5 py-1.5 border border-[#2a2720] text-stone-300 hover:border-[#c5a059] hover:text-white rounded-lg transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="hidden sm:block px-3.5 py-1.5 bg-[#c5a059] text-black font-bold rounded-lg hover:bg-white transition">
                Join
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-full border border-[#c5a059]",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-10 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-[#c5a059] text-black font-semibold shadow-lg shadow-[#c5a059]/10"
                  : "bg-[#1c1a17] text-stone-400 hover:text-white border border-[#2a2720]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#1c1a17] border border-[#2a2720] rounded-xl overflow-hidden hover:border-[#c5a059]/50 transition duration-300 flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] bg-[#161412] overflow-hidden">
                {product.mediaType === "video" ? (
                  <video
                    src={product.mediaUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <Image
                    src={product.mediaUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider text-[#c5a059] border border-[#2a2720]">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-lg text-white group-hover:text-[#c5a059] transition">
                      {product.name}
                    </h3>
                    <span className="font-mono text-sm text-[#c5a059] font-medium">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2a2720] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">
                    Custom Handcrafted
                  </span>
                  <button className="px-4 py-2 bg-[#2a2720] hover:bg-[#c5a059] text-white hover:text-black text-xs font-mono font-medium rounded-lg transition duration-200">
                    Acquire Piece
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}