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
    <main
      style={{ backgroundColor: "#140c06", minHeight: "100vh", color: "#fef3c7" }}
      className="font-sans selection:bg-amber-500 selection:text-black"
    >
      {/* Top Announcement Bar */}
      <div
        style={{
          background: "linear-gradient(to right, #451a03, #78350f, #451a03)",
          borderBottom: "1px solid #92400e",
          color: "#fde68a",
        }}
        className="text-center py-2 text-xs font-bold tracking-widest uppercase shadow-lg"
      >
        ✨ CUSTOM COMMISSIONS OPEN • WORLDWIDE SHIPPING AVAILABLE ✨
      </div>

      {/* Main Header / Navigation */}
      <header
        style={{
          backgroundColor: "#140c06",
          borderBottom: "1px solid #78350f",
        }}
        className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-md"
      >
        <div className="flex items-center gap-3">
          <span
            style={{ color: "#fbbf24" }}
            className="text-2xl font-black tracking-widest uppercase"
          >
            ONYXX THREADS
          </span>
        </div>

        {/* Authentication Actions */}
        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div
              style={{ backgroundColor: "#451a03" }}
              className="h-8 w-20 animate-pulse rounded-md"
            />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button
                  style={{ color: "#fcd34d" }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  style={{ backgroundColor: "#f59e0b", color: "#0f0804" }}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition shadow-md"
                >
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
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white">
          Wearable Art &{" "}
          <span style={{ color: "#fbbf24" }} className="font-normal">
            Fine Tapestry
          </span>
        </h1>
        <p style={{ color: "#fde68a", opacity: 0.8 }} className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">
          Bespoke tapestry crochet portraiture, structural headwear, and custom textile apparel handcrafted with precision.
        </p>
      </section>

      {/* Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div style={{ borderBottom: "1px solid #78350f" }} className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={
                selectedCategory === cat
                  ? { backgroundColor: "#f59e0b", color: "#0f0804", fontWeight: "bold" }
                  : { backgroundColor: "#26140a", color: "#fcd34d", border: "1px solid #78350f" }
              }
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition whitespace-nowrap shadow-sm"
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
              style={{
                backgroundColor: "#1c0f07",
                border: "1px solid #78350f",
              }}
              className="group rounded-xl overflow-hidden transition duration-300 flex flex-col justify-between shadow-2xl"
            >
              {/* Media Container */}
              <div
                style={{ backgroundColor: "#0b0603", borderBottom: "1px solid #451a03" }}
                className="relative w-full h-80 overflow-hidden flex items-center justify-center"
              >
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
                  <div style={{ color: "#fbbf24", opacity: 0.5 }} className="w-full h-full flex items-center justify-center text-xs tracking-widest uppercase">
                    {product.name} Preview
                  </div>
                )}
                <span
                  style={{ backgroundColor: "#140c06", color: "#fcd34d", border: "1px solid #78350f" }}
                  className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded shadow"
                >
                  {product.category}
                </span>
              </div>

              {/* Info Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-medium text-white group-hover:text-amber-300 transition">
                      {product.name}
                    </h3>
                    <span style={{ color: "#fbbf24" }} className="text-sm font-semibold">
                      {product.price}
                    </span>
                  </div>
                  <p style={{ color: "#fde68a", opacity: 0.7 }} className="text-xs leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <button
                  style={{
                    backgroundColor: "#451a03",
                    color: "#fde68a",
                    border: "1px solid #78350f",
                  }}
                  className="mt-6 w-full py-2.5 hover:bg-amber-500 hover:text-black text-xs font-semibold tracking-wider uppercase rounded-lg transition duration-200 shadow"
                >
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