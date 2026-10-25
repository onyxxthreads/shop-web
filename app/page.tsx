"use client";

import React, { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Header / Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <div className="text-xl font-bold tracking-wider">ONYXX THREADS</div>
        
        {/* Clerk Authentication Header Actions */}
        <div className="flex items-center gap-4">
          {isLoaded && !isSignedIn && (
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
          )}
          {isLoaded && isSignedIn && (
            <UserButton />
          )}
        </div>
      </header>

      {/* Store Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-light mb-6">Handcrafted Tapestry & Apparel</h1>
        
        {/* Category Filters */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {["All", "Dress", "Tops", "Hats", "Bottoms", "Tapestry"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedCategory === cat
                  ? "bg-white text-neutral-950 font-medium"
                  : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-900 rounded-lg h-80 flex items-center justify-center border border-neutral-800 text-neutral-500">
            Product Catalog Loading...
          </div>
        </div>
      </div>
    </main>
  );
}