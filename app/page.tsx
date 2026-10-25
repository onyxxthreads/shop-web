"use client";

import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Trinity Tapestry Hat",
    category: "Hats",
    price: "$85",
    description: "Custom tapestry crochet bucket hat with structural multi-yarn weave.",
    mediaType: "video",
    mediaSrc: "/trinity-hat.mp4",
  },
  {
    id: "2",
    name: "Ewia Kete Hat",
    category: "Hats",
    price: "$95",
    description: "Handcrafted structured brim with bespoke geometric colorwork.",
    mediaType: "image",
    mediaSrc: "/ewia-kete.jpg",
  },
  {
    id: "3",
    name: "Koro Portrait Tapestry",
    category: "Tapestry",
    price: "Inquire for Pricing",
    description: "15,376-stitch fine art gridded tapestry portraiture featuring Kwame Nkrumah.",
    mediaType: "image",
    mediaSrc: "/koro.jpg",
  },
  {
    id: "4",
    name: "Aura Tapestry Dress",
    category: "Dress",
    price: "$240",
    description: "Form-fitting wearable textile art crafted with milk cotton.",
    mediaType: "image",
    mediaSrc: "/aura-dress.jpg",
  },
];

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isSignedIn, isLoaded } = useAuth();

  const categories = ["All", "Tapestry", "Hats", "Dress", "Tops", "Bottoms"];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-neutral-900 border-b border-neutral-800 text-center py-2 text-xs font-medium tracking-widest text-neutral-400 uppercase">
        Custom Commissions Open • Worldwide Shipping Available
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-widest text-white">
            ONYXX THREADS
          </span>
        </div>

        {/* Authentication Actions */}
        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div className="h-8 w-20 bg-neutral-900 animate-pulse rounded-md" />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white text-neutral-950 hover:bg-neutral-200 rounded-md transition">
                  Join
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
          Wearable Art & Fine Tapestry
        </h1>
        <p className="mt-3 text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
          Bespoke tapestry crochet portraiture, structural headwear, and custom textile apparel handcrafted with precision.
        </p>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-neutral-800 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-white text-neutral-950"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition duration-300 flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative w-full h-80 bg-neutral-950 overflow-hidden flex items-center justify-center">
                {product.mediaType === "video" ? (
                  <video
                    src={product.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-600 text-xs tracking-widest uppercase">
                    {product.name} Preview
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded border border-neutral-800">
                  {product.category}
                </span>
              </div>

              {/* Info Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium text-white group-hover:text-neutral-200 transition">
                      {product.name}
                    </h3>
                    <span className="text-sm font-semibold text-neutral-300">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <button className="mt-6 w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition">
                  Inquire / Custom Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}