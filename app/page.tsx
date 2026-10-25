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
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Ewia Kete Hat",
    category: "Hats",
    price: "$85",
    description: "Custom tapestry crochet bucket hat with structural weave.",
  },
  {
    id: "2",
    name: "Trinity Tapestry Vest",
    category: "Tops",
    price: "$180",
    description: "High-density milk cotton weave with textured finish.",
  },
  {
    id: "3",
    name: "Koro Portrait Tapestry",
    category: "Tapestry",
    price: "Custom Order",
    description: "Fine art gridded portraiture with multi-yarn dimension.",
  },
  {
    id: "4",
    name: "Aura Crochet Dress",
    category: "Dress",
    price: "$240",
    description: "Handcrafted silhouette with bespoke colorwork.",
  },
];

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isSignedIn, isLoaded } = useAuth();

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header / Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <div className="text-xl font-bold tracking-wider">ONYXX THREADS</div>

        {/* Clerk Authentication Header Actions */}
        <div className="flex items-center gap-4">
          {!isLoaded ? (
            <div className="h-8 w-16 bg-neutral-900 animate-pulse rounded-md" />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium bg-neutral-800 hover:bg-neutral-700 rounded-md transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 text-sm font-medium bg-white text-neutral-950 hover:bg-neutral-200 rounded-md transition">
                  Join
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>

      {/* Store Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light mb-2">
            Handcrafted Tapestry & Apparel
          </h1>
          <p className="text-neutral-400 text-sm">
            High-fidelity crochet art, wearable garments, and custom tapestry pieces.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {["All", "Dress", "Tops", "Hats", "Bottoms", "Tapestry"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-white text-neutral-950 font-medium"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between hover:border-neutral-700 transition"
              >
                <div>
                  <div className="w-full h-48 bg-neutral-950 rounded-lg mb-4 border border-neutral-800/50 flex items-center justify-center text-neutral-600 text-xs uppercase tracking-widest">
                    {product.category}
                  </div>
                  <h2 className="text-lg font-medium text-neutral-100">
                    {product.name}
                  </h2>
                  <p className="text-neutral-400 text-sm mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-neutral-800/60 pt-4">
                  <span className="text-sm font-semibold text-neutral-200">
                    {product.price}
                  </span>
                  <button className="px-3 py-1.5 text-xs font-medium bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-neutral-200">
                    View Piece
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-neutral-500">
              No pieces currently available in this category.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}