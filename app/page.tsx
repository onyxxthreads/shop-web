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
    details: ["Custom color options available", "Structural multi-yarn weave", "Handcrafted fit"],
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
    details: ["Bespoke geometric pattern", "Reinforced structured brim", "Comfort fit"],
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
    details: ["Fine art tapestry", "High-density colorwork", "Wall-mount canvas finish"],
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
    details: ["Archived piece", "Detailed historical portrait", "Private collection"],
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
    <div className="kinetic-bg" style={{ minHeight: "100vh", color: "#f3f4f6", width: "100%", position: "relative" }}>
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
          zIndex: 40,
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
                opacity: product.status === "sold" ? 0.75 : 1,
              }}
            >
              {/* Media Card */}
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  height: "340px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
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
                    style={{
                      background: "rgba(10, 8, 18, 0.75)",
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
                  {product.status === "sold" && (
                    <span
                      style={{
                        background: "rgba(185, 28, 28, 0.85)",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: "700",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      Sold
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
                    <span style={{ color: product.status === "sold" ? "#9ca3af" : "#e5e7eb", fontSize: "14px", fontWeight: "700" }}>
                      {product.price}
                    </span>
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                    {product.description}
                  </p>

                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "11px", color: "#d1d5db", fontWeight: "600", marginBottom: "6px" }}>
                      🧵 {product.materials}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {product.details.map((detail, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            color: "#9ca3af",
                            fontSize: "10px",
                            padding: "3px 8px",
                            borderRadius: "4px",
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
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: product.status === "sold" ? "rgba(255, 255, 255, 0.02)" : "rgba(255, 255, 255, 0.08)",
                    color: product.status === "sold" ? "#4b5563" : "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "10px",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: product.status === "sold" ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {product.status === "sold" ? "Archived / Sold" : "Inquire / Custom Order"}
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
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(16px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="glass-card"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "20px",
              padding: "32px",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
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
                color: "#9ca3af",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>💬</div>
                <h3 style={{ fontSize: "22px", color: "#ffffff", fontWeight: "600", marginBottom: "8px" }}>
                  Opening WhatsApp
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Your commission details for <strong>{inquiryProduct.name}</strong> have been formatted into a message and redirected to WhatsApp Business.
                </p>
                <button
                  onClick={handleCloseModal}
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#ffffff",
                    color: "#0a0a0c",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "700",
                    fontSize: "12px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Close Window
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
                      color: "#9ca3af",
                    }}
                  >
                    Commission Request
                  </span>
                  <h2 style={{ fontSize: "24px", color: "#ffffff", fontWeight: "600", margin: "4px 0 0 0" }}>
                    {inquiryProduct.name}
                  </h2>
                  <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "4px" }}>
                    Estimated Price: <span style={{ fontWeight: "700", color: "#ffffff" }}>{inquiryProduct.price}</span>
                  </p>
                </div>

                {/* Name */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Contact */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Email or Phone Contact
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
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Custom Color Palette / Sizing */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Preferred Colors / Sizing (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.customColors}
                    onChange={(e) => setFormData({ ...formData, customColors: e.target.value })}
                    placeholder="e.g. Black & Cream, High-contrast, Custom dimensions"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ display: "block", fontSize: "11px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Project Notes & Concept Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Share any specific requests, timeline, or design ideas..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "14px",
                    backgroundColor: "#ffffff",
                    color: "#0a0a0c",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "11px",
                    fontWeight: "800",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {isSubmitting ? "Preparing WhatsApp..." : "Send via WhatsApp Business"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}