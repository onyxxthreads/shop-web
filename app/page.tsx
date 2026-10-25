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
  details: string[];
  materials: string;
  status: "available" | "sold";
  mediaType: "image" | "video";
  mediaSrc: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Trinity Hat",
    category: "Hats",
    price: "GHC 400",
    description: "Custom tapestry crochet bucket hat with structural multi-yarn weave. Can be made in any color of choice.",
    details: ["CUSTOM PALETTE", "STRUCTURAL WEAVE", "HANDCRAFTED FIT"],
    materials: "Milk Cotton & Specialty Yarns",
    status: "available",
    mediaType: "video",
    mediaSrc: "/trinity hat.mp4",
  },
  {
    id: "2",
    name: "Ewia Kete Hat",
    category: "Hats",
    price: "GHC 350",
    description: "Handcrafted structured brim with bespoke geometric colorwork.",
    details: ["BESPOKE GEOMETRIC", "REINFORCED BRIM", "COMFORT FIT"],
    materials: "4-ply Milk Cotton",
    status: "available",
    mediaType: "image",
    mediaSrc: "/ewia-kete-hat.jpg",
  },
  {
    id: "3",
    name: "Dromo Tapestry Piece",
    category: "Tapestry",
    price: "Inquire for Pricing",
    description: "Fine art tapestry Jesus piece featuring high-density textural colorwork.",
    details: ["FINE ART TAPESTRY", "HIGH-DENSITY COLORWORK", "WALL-MOUNT CANVAS"],
    materials: "Milk Cotton & Bouclé",
    status: "available",
    mediaType: "image",
    mediaSrc: "/dromo.jpg",
  },
  {
    id: "4",
    name: "Nkrumah Portrait Tapestry",
    category: "Tapestry",
    price: "Sold",
    description: "Historical gridded tapestry portraiture showcasing Kwame Nkrumah.",
    details: ["ARCHIVED PIECE", "15,376 STITCHES", "PRIVATE COLLECTION"],
    materials: "Milk Cotton",
    status: "sold",
    mediaType: "image",
    mediaSrc: "/nkrumah.jpg",
  },
];

export default function Storefront() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customColors: "",
    notes: "",
  });

  const { isSignedIn, isLoaded } = useAuth();

  const categories = ["All", "Tapestry", "Hats", "Dress", "Tops", "Bottoms"];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (product: Product) => {
    if (product.status === "sold") return;
    setInquiryProduct(product);
    setSubmitted(false);
    setFormData({ name: "", email: "", customColors: "", notes: "" });
  };

  const handleCloseModal = () => {
    setInquiryProduct(null);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const phoneNumber = "233543312793";

    const message =
      `*New Custom Commission Inquiry - Onyxx Threads*\n\n` +
      `*Piece:* ${inquiryProduct?.name}\n` +
      `*Estimated Price:* ${inquiryProduct?.price}\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Contact:* ${formData.email}\n` +
      `*Preferred Colors/Sizing:* ${formData.customColors || "Standard / Open to advice"}\n` +
      `*Project Notes:* ${formData.notes || "None provided"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="kinetic-bg cyber-matrix" style={{ minHeight: "100vh", color: "#f3f4f6", width: "100%", position: "relative" }}>
      {/* Top Banner */}
      <div
        style={{
          background: "rgba(0, 240, 255, 0.05)",
          borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
          color: "#00f0ff",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "monospace",
          textShadow: "0 0 8px rgba(0, 240, 255, 0.5)",
        }}
      >
        ⚡ SYSTEM // CUSTOM COMMISSIONS OPEN • WORLDWIDE SHIPPING AVAILABLE ⚡
      </div>

      {/* Navigation Header */}
      <header
        style={{
          background: "rgba(10, 8, 20, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
          padding: "18px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "900",
            letterSpacing: "0.25em",
            color: "#ffffff",
            textShadow: "0 0 10px rgba(0, 240, 255, 0.6)",
            fontFamily: "monospace",
          }}
        >
          ONYXX_THREADS//
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isLoaded ? (
            <div
              style={{
                backgroundColor: "rgba(0, 240, 255, 0.1)",
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
                    color: "#00f0ff",
                    background: "none",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "monospace",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button
                  className="cyber-hud-btn"
                  style={{
                    padding: "8px 18px",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: "700",
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
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 28px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "300", color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
          Wearable Art & <span style={{ fontWeight: "700", color: "#00f0ff", textShadow: "0 0 12px rgba(0, 240, 255, 0.5)" }}>Fine Tapestry</span>
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "12px", fontSize: "15px", maxWidth: "600px", lineHeight: "1.6" }}>
          Bespoke tapestry crochet portraiture, structural headwear, and custom textile apparel handcrafted with cyber-level precision.
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
            borderBottom: "1px solid rgba(0, 240, 255, 0.15)",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "cyber-hud-btn" : "glass-pill"}
              style={
                selectedCategory === cat
                  ? {
                      padding: "8px 22px",
                      cursor: "pointer",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }
                  : {
                      color: "#9ca3af",
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
              className="cyber-hud-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                opacity: product.status === "sold" ? 0.75 : 1,
              }}
            >
              {/* Media Card */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  height: "340px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
                  overflow: "hidden",
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
                  <img
                    src={product.mediaSrc}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}

                {/* Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <span
                    className="cyber-tag"
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      padding: "4px 10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {product.category}
                  </span>
                  {product.status === "sold" && (
                    <span
                      style={{
                        background: "rgba(255, 0, 85, 0.85)",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: "700",
                        padding: "4px 10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontFamily: "monospace",
                      }}
                    >
                      ARCHIVED // SOLD
                    </span>
                  )}
                </div>
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
                    <span style={{ color: product.status === "sold" ? "#9ca3af" : "#00f0ff", fontSize: "14px", fontWeight: "700", fontFamily: "monospace" }}>
                      {product.price}
                    </span>
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                    {product.description}
                  </p>

                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "11px", color: "#00f0ff", fontWeight: "600", marginBottom: "6px", fontFamily: "monospace" }}>
                      🧵 SPEC // {product.materials}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {product.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="cyber-tag"
                          style={{
                            fontSize: "10px",
                            padding: "3px 8px",
                          }}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  disabled={product.status === "sold"}
                  onClick={() => handleOpenModal(product)}
                  className={product.status === "sold" ? "" : "cyber-hud-btn"}
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: product.status === "sold" ? "rgba(255, 255, 255, 0.02)" : undefined,
                    color: product.status === "sold" ? "#4b5563" : undefined,
                    border: product.status === "sold" ? "1px solid rgba(255, 255, 255, 0.08)" : undefined,
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    cursor: product.status === "sold" ? "not-allowed" : "pointer",
                  }}
                >
                  {product.status === "sold" ? "ARCHIVED / SOLD" : "INQUIRE // CUSTOM ORDER"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Inquiry Modal */}
      {inquiryProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(16px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="cyber-hud-card"
            style={{
              width: "100%",
              maxWidth: "520px",
              padding: "32px",
              position: "relative",
              boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "none",
                border: "none",
                color: "#00f0ff",
                fontSize: "20px",
                cursor: "pointer",
                fontFamily: "monospace",
              }}
            >
              ✕
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>⚡</div>
                <h3 style={{ fontSize: "22px", color: "#ffffff", fontWeight: "600", marginBottom: "8px", fontFamily: "monospace" }}>
                  OPENING WHATSAPP...
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Your commission details for <strong>{inquiryProduct.name}</strong> have been formatted into a message and redirected to WhatsApp Business.
                </p>
                <button
                  onClick={handleCloseModal}
                  className="cyber-hud-btn"
                  style={{
                    padding: "10px 24px",
                    fontWeight: "700",
                    fontSize: "12px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  CLOSE TERMINAL
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry}>
                <div style={{ marginBottom: "20px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#00f0ff",
                      fontFamily: "monospace",
                    }}
                  >
                    COMMISSION_REQUEST // SYSTEM
                  </span>
                  <h2 style={{ fontSize: "24px", color: "#ffffff", fontWeight: "600", margin: "4px 0 0 0" }}>
                    {inquiryProduct.name}
                  </h2>
                  <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "4px", fontFamily: "monospace" }}>
                    PRICE: <span style={{ fontWeight: "700", color: "#00f0ff" }}>{inquiryProduct.price}</span>
                  </p>
                </div>

                {/* Name */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#00f0ff", marginBottom: "6px", textTransform: "uppercase", fontFamily: "monospace" }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(0, 240, 255, 0.05)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                {/* Contact */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#00f0ff", marginBottom: "6px", textTransform: "uppercase", fontFamily: "monospace" }}>
                    EMAIL / PHONE CONTACT
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your email or phone number"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(0, 240, 255, 0.05)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                {/* Custom Colors */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#00f0ff", marginBottom: "6px", textTransform: "uppercase", fontFamily: "monospace" }}>
                    PREFERRED COLORS / SIZING (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={formData.customColors}
                    onChange={(e) => setFormData({ ...formData, customColors: e.target.value })}
                    placeholder="e.g. Neon Magenta, High-contrast, Custom dimensions"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(0, 240, 255, 0.05)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#00f0ff", marginBottom: "6px", textTransform: "uppercase", fontFamily: "monospace" }}>
                    PROJECT NOTES & CONCEPT DETAILS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Share any specific requests, timeline, or design ideas..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(0, 240, 255, 0.05)",
                      border: "1px solid rgba(0, 240, 255, 0.2)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      resize: "none",
                      fontFamily: "monospace",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-hud-btn"
                  style={{
                    width: "100%",
                    padding: "14px",
                    fontSize: "11px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  {isSubmitting ? "PREPARING WHATSAPP..." : "SEND VIA WHATSAPP BUSINESS"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}