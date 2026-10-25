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
    <div className="kinetic-bg" style={{ minHeight: "100vh", color: "#f3f4f6", width: "100%" }}>
      {/* Top Banner */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#e5e7eb",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        ✨ CUSTOM COMMISSIONS OPEN • WORLDWIDE SHIPPING AVAILABLE ✨
      </div>

      {/* Navigation Header */}
      <header
        style={{
          background: "rgba(10, 8, 18, 0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "900",
            letterSpacing: "0.2em",
            background: "linear-gradient(to right, #ffffff, #d1d5db, #9ca3af)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ONYXX THREADS
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isLoaded ? (
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                height: "32px",
                width: "80px",
                borderRadius: "6px",
              }}
            />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button
                  style={{
                    color: "#d1d5db",
                    background: "none",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    color: "#0a0a0c",
                    border: "none",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
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
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 28px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
          Wearable Art & <span style={{ fontWeight: "600", color: "#f3f4f6" }}>Fine Tapestry</span>
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "12px", fontSize: "15px", maxWidth: "600px", lineHeight: "1.6" }}>
          Bespoke tapestry crochet portraiture, structural headwear, and custom textile apparel handcrafted with precision.
        </p>
      </section>

      {/* Category Pills */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 36px" }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "" : "glass-pill"}
              style={
                selectedCategory === cat
                  ? {
                      backgroundColor: "#ffffff",
                      color: "#0a0a0c",
                      fontWeight: "700",
                      border: "none",
                      padding: "8px 22px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                    }
                  : {
                      color: "#d1d5db",
                      padding: "8px 22px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-card"
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
            >
              {/* Media Card */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  height: "320px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {product.mediaType === "video" ? (
                  <video
                    src={product.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      color: "#9ca3af",
                      fontSize: "12px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.name} Preview
                  </div>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    background: "rgba(10, 8, 18, 0.7)",
                    backdropFilter: "blur(12px)",
                    color: "#e5e7eb",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    fontSize: "10px",
                    fontWeight: "600",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Product Details */}
              <div
                style={{
                  padding: "24px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff", margin: 0 }}>
                      {product.name}
                    </h3>
                    <span style={{ color: "#e5e7eb", fontSize: "14px", fontWeight: "700" }}>
                      {product.price}
                    </span>
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: 0 }}>
                    {product.description}
                  </p>
                </div>

                <button
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "10px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Inquire / Custom Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}