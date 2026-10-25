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
    <div
      style={{ backgroundColor: "#140c06", minHeight: "100vh", color: "#fef3c7", width: "100%" }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: "linear-gradient(to right, #451a03, #78350f, #451a03)",
          borderBottom: "1px solid #92400e",
          color: "#fde68a",
          textAlign: "center",
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: "bold",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        ✨ CUSTOM COMMISSIONS OPEN • WORLDWIDE SHIPPING AVAILABLE ✨
      </div>

      {/* Navigation Header */}
      <header
        style={{
          backgroundColor: "#140c06",
          borderBottom: "1px solid #78350f",
          padding: "16px 24px",
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
            color: "#fbbf24",
            fontSize: "20px",
            fontWeight: "900",
            letterSpacing: "0.15em",
          }}
        >
          ONYXX THREADS
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isLoaded ? (
            <div
              style={{
                backgroundColor: "#451a03",
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
                    color: "#fcd34d",
                    background: "none",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "#0f0804",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
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
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 24px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "300", color: "#ffffff", margin: 0 }}>
          Wearable Art &{" "}
          <span style={{ color: "#fbbf24", fontWeight: "400" }}>
            Fine Tapestry
          </span>
        </h1>
        <p style={{ color: "#fde68a", opacity: 0.8, marginTop: "12px", fontSize: "14px" }}>
          Bespoke tapestry crochet portraiture, structural headwear, and custom textile apparel handcrafted with precision.
        </p>
      </section>

      {/* Categories Bar */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 32px" }}>
        <div
          style={{
            display: "flex",
            gap: "12px",
            overflowX: "auto",
            paddingBottom: "12px",
            borderBottom: "1px solid #78350f",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={
                selectedCategory === cat
                  ? {
                      backgroundColor: "#f59e0b",
                      color: "#0f0804",
                      fontWeight: "bold",
                      border: "none",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }
                  : {
                      backgroundColor: "#26140a",
                      color: "#fcd34d",
                      border: "1px solid #78350f",
                      padding: "8px 20px",
                      borderRadius: "20px",
                      cursor: "pointer",
                      fontSize: "12px",
                      textTransform: "uppercase",
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
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#1c0f07",
                border: "1px solid #78350f",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Media Card */}
              <div
                style={{
                  backgroundColor: "#0b0603",
                  height: "320px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #451a03",
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
                      color: "#fbbf24",
                      opacity: 0.5,
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.name} Preview
                  </div>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: "#140c06",
                    color: "#fcd34d",
                    border: "1px solid #78350f",
                    fontSize: "10px",
                    fontWeight: "600",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  {product.category}
                </span>
              </div>

              {/* Product Info */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#ffffff", margin: 0 }}>
                      {product.name}
                    </h3>
                    <span style={{ color: "#fbbf24", fontSize: "14px", fontWeight: "bold" }}>
                      {product.price}
                    </span>
                  </div>
                  <p style={{ color: "#fde68a", opacity: 0.7, fontSize: "12px", lineHeight: "1.5", margin: 0 }}>
                    {product.description}
                  </p>
                </div>

                <button
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#451a03",
                    color: "#fde68a",
                    border: "1px solid #78350f",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    cursor: "pointer",
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