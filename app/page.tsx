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
  indexCode: string;
  name: string;
  category: string;
  type: "shop" | "archive";
  price?: string;
  description: string;
  details: string[];
  materials: string;
  status: "available" | "custom_order" | "archived";
  mediaType: "image" | "video";
  mediaSrc: string;
}

const PRODUCTS: Product[] = [
  // --- STOREFRONT / SHOP ITEMS ---
  {
    id: "1",
    indexCode: "01 //",
    name: "Trinity Hat",
    category: "Hats",
    type: "shop",
    price: "GHC 400",
    description: "Custom tapestry crochet bucket hat with structural multi-yarn weave.",
    details: ["BESPOKE PALETTE", "STRUCTURAL WEAVE", "HANDCRAFTED FIT"],
    materials: "Milk Cotton & Specialty Yarns",
    status: "available",
    mediaType: "video",
    mediaSrc: "/trinity hat.mp4",
  },
  {
    id: "2",
    indexCode: "02 //",
    name: "Ewia Kete Hat",
    category: "Hats",
    type: "shop",
    price: "GHC 350",
    description: "Handcrafted structured brim with bespoke geometric colorwork.",
    details: ["GEOMETRIC PATTERN", "REINFORCED BRIM", "COMFORT FIT"],
    materials: "4-ply Milk Cotton",
    status: "available",
    mediaType: "image",
    mediaSrc: "/ewia-kete-hat.jpg",
  },
  {
    id: "3",
    indexCode: "03 //",
    name: "Dromo Tapestry Piece",
    category: "Tapestry",
    type: "shop",
    price: "Inquire for Pricing",
    description: "Fine art tapestry portrait featuring high-density textural colorwork.",
    details: ["FINE ART TAPESTRY", "HIGH-DENSITY COLORWORK", "CANVAS FINISH"],
    materials: "Milk Cotton & Bouclé",
    status: "available",
    mediaType: "image",
    mediaSrc: "/dromo.jpg",
  },
  {
    id: "4",
    indexCode: "04 //",
    name: "Nkrumah Portrait Tapestry",
    category: "Tapestry",
    type: "shop",
    price: "Sold",
    description: "Historical gridded tapestry portraiture showcasing Kwame Nkrumah.",
    details: ["ARCHIVED PIECE", "15,376 STITCHES", "PRIVATE COLLECTION"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/nkrumah.jpg",
  },

  // --- CLIENT ARCHIVE & GALLERY ---
  {
    id: "5",
    indexCode: "05 //",
    name: "Balaclava Piece 01",
    category: "Hats",
    type: "archive",
    description: "Custom handcrafted balaclava showcase piece.",
    details: ["CUSTOM COMMISSION", "STRUCTURAL FIT"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/bala 1.jpg",
  },
  {
    id: "6",
    indexCode: "06 //",
    name: "Balaclava Piece 02",
    category: "Hats",
    type: "archive",
    description: "Detailed angle of custom balaclava work.",
    details: ["ARCHIVAL GALLERY", "HANDCRAFTED"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/bala 2.jpg",
  },
  {
    id: "7",
    indexCode: "07 //",
    name: "Cross Motif Art 01",
    category: "Tapestry",
    type: "archive",
    description: "Tapestry colorwork study featuring intricate cross iconography.",
    details: ["HIGH-DENSITY COLORWORK", "FINE ART"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/cross 1.jpg",
  },
  {
    id: "8",
    indexCode: "08 //",
    name: "Cross Motif Art 02",
    category: "Tapestry",
    type: "archive",
    description: "Alternate perspective of cross iconography tapestry.",
    details: ["TEXTURED WEAVE", "GALLERY SHOWCASE"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/cross 2.jpg",
  },
  {
    id: "9",
    indexCode: "09 //",
    name: "Dog Portrait Tapestry 01",
    category: "Tapestry",
    type: "archive",
    description: "Custom gridded animal portraiture commission.",
    details: ["PORTRAIT CROCHET", "CLIENT COMMISSION"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/dog 1.jpg",
  },
  {
    id: "10",
    indexCode: "10 //",
    name: "Dog Portrait Tapestry 02",
    category: "Tapestry",
    type: "archive",
    description: "Textural detail of custom portraiture.",
    details: ["HIGH-FIDELITY GRID", "ARCHIVED"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/dog 2.jpg",
  },
  {
    id: "11",
    indexCode: "11 //",
    name: "Flame Motif Piece 01",
    category: "Tapestry",
    type: "archive",
    description: "Dynamic flame colorwork tapestry design.",
    details: ["BESPOKE PALETTE", "GRAPHIC WEAVE"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/flame 1.jpg",
  },
  {
    id: "12",
    indexCode: "12 //",
    name: "Flame Motif Piece 02",
    category: "Tapestry",
    type: "archive",
    description: "Detailed view of flame colorwork structure.",
    details: ["CUSTOM ARTWORK", "GALLERY PIECE"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/flame 2.jpg",
  },
  {
    id: "13",
    indexCode: "13 //",
    name: "Arcade Motif 01",
    category: "Tapestry",
    type: "archive",
    description: "Retro pop-culture grid tapestry portraiture.",
    details: ["PIXEL COLORWORK", "CLIENT WORK"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/pacman 1.jpg",
  },
  {
    id: "14",
    indexCode: "14 //",
    name: "Arcade Motif 02",
    category: "Tapestry",
    type: "archive",
    description: "Alternate framing of arcade pixel tapestry.",
    details: ["ARCHIVED GALLERY", "CUSTOM WEAVE"],
    materials: "Milk Cotton",
    status: "archived",
    mediaType: "image",
    mediaSrc: "/pacman 2.jpg",
  },
];

export default function Storefront() {
  const [activeTab, setActiveTab] = useState<"shop" | "archive">("shop");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customColors: "",
    notes: "",
  });

  const { isSignedIn, isLoaded } = useAuth();

  const categories = ["All", "Tapestry", "Hats", "Dress", "Tops", "Bottoms"];

  const currentTabProducts = PRODUCTS.filter((p) => p.type === activeTab);
  const filteredProducts =
    selectedCategory === "All"
      ? currentTabProducts
      : currentTabProducts.filter((p) => p.category === selectedCategory);

  const handleOpenModal = (product: Product) => {
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
      `*Piece Reference:* ${inquiryProduct?.name} (${inquiryProduct?.indexCode})\n` +
      `*Section:* ${inquiryProduct?.type === "shop" ? "Shop Catalog" : "Client Archive Showcase"}\n` +
      `*Price / Status:* ${inquiryProduct?.price || "Custom Showcase Inquire"}\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Contact:* ${formData.email}\n` +
      `*Preferred Palette / Sizing:* ${formData.customColors || "Standard / Open to advice"}\n` +
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
    <div style={{ minHeight: "100vh", backgroundColor: "#050507", color: "#f3f4f6", width: "100%", position: "relative" }}>
      {/* Editorial Banner */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          color: "#e5e7eb",
          textAlign: "center",
          padding: "10px 16px",
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        COMMISSIONS OPEN • WORLDWIDE SHIPPING AVAILABLE
      </div>

      {/* Navigation Header */}
      <header
        style={{
          background: "rgba(5, 5, 7, 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: "20px 32px",
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
            fontSize: "20px",
            fontWeight: "900",
            letterSpacing: "0.3em",
            color: "#ffffff",
            fontFamily: "monospace",
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
              }}
            />
          ) : !isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button
                  style={{
                    color: "#9ca3af",
                    background: "none",
                    border: "none",
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: "11px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    fontFamily: "monospace",
                  }}
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="noir-btn" style={{ padding: "8px 18px" }}>
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
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 24px" }}>
        <span style={{ fontSize: "11px", fontFamily: "monospace", letterSpacing: "0.25em", color: "#6b7280", textTransform: "uppercase" }}>
          BESPOKE FIBER ART & WEARABLE COUTURE
        </span>
        <h1 style={{ fontSize: "44px", fontWeight: "300", color: "#ffffff", margin: "12px 0 0 0", letterSpacing: "-0.03em", lineHeight: "1.15" }}>
          Handcrafted Tapestries & <span style={{ fontWeight: "600", color: "#ffffff" }}>Custom Crochet Apparel</span>
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "16px", fontSize: "15px", maxWidth: "600px", lineHeight: "1.7" }}>
          Handcrafted in Ghana using dense multi-yarn weaves, high-fidelity colorwork grids, and architectural silhouettes.
        </p>
      </section>

      {/* Main View Mode Selector */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 24px" }}>
        <div
          style={{
            display: "flex",
            gap: "16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
            paddingBottom: "16px",
          }}
        >
          <button
            onClick={() => {
              setActiveTab("shop");
              setSelectedCategory("All");
            }}
            style={{
              background: "none",
              border: "none",
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              color: activeTab === "shop" ? "#ffffff" : "#6b7280",
              borderBottom: activeTab === "shop" ? "2px solid #ffffff" : "none",
              paddingBottom: "8px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            01 // SHOP & ORDERS
          </button>
          <button
            onClick={() => {
              setActiveTab("archive");
              setSelectedCategory("All");
            }}
            style={{
              background: "none",
              border: "none",
              fontSize: "13px",
              fontWeight: "700",
              fontFamily: "monospace",
              letterSpacing: "0.15em",
              color: activeTab === "archive" ? "#ffffff" : "#6b7280",
              borderBottom: activeTab === "archive" ? "2px solid #ffffff" : "none",
              paddingBottom: "8px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            02 // CLIENT ARCHIVE & GALLERY
          </button>
        </div>
      </section>

      {/* Category Sub-Filters */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 40px" }}>
        <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "noir-pill-active" : "noir-pill"}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Display */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "36px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="noir-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Media Container */}
              <div
                style={{
                  backgroundColor: "#000000",
                  height: "360px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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

                {/* Index & Category Badges */}
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#ffffff",
                      background: "rgba(5, 5, 7, 0.85)",
                      padding: "4px 8px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    {product.indexCode}
                  </span>
                  <span className="noir-tag">{product.category}</span>
                </div>

                {/* Archive Badge */}
                {product.type === "archive" && (
                  <div style={{ position: "absolute", top: "14px", right: "14px" }}>
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0.12)",
                        backdropFilter: "blur(8px)",
                        color: "#ffffff",
                        fontFamily: "monospace",
                        fontSize: "10px",
                        fontWeight: "700",
                        padding: "4px 10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      CLIENT WORK
                    </span>
                  </div>
                )}
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
                    {product.type === "shop" && (
                      <span style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700", fontFamily: "monospace" }}>
                        {product.price}
                      </span>
                    )}
                  </div>

                  <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: "1.6", margin: "0 0 16px 0" }}>
                    {product.description}
                  </p>

                  <div style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "11px", color: "#d1d5db", fontWeight: "600", marginBottom: "8px", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                      SPEC // {product.materials}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {product.details.map((detail, idx) => (
                        <span key={idx} className="noir-tag">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(product)}
                  className="noir-btn"
                  style={{
                    width: "100%",
                    padding: "14px",
                  }}
                >
                  {product.type === "shop" ? "INQUIRE // CUSTOM ORDER" : "INQUIRE // SIMILAR CUSTOM PIECE"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(20px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="noir-card"
            style={{
              width: "100%",
              maxWidth: "520px",
              padding: "36px",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
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
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>💬</div>
                <h3 style={{ fontSize: "20px", color: "#ffffff", fontWeight: "600", marginBottom: "8px", fontFamily: "monospace", letterSpacing: "0.1em" }}>
                  OPENING WHATSAPP
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
                  Your inquiry for <strong>{inquiryProduct.name}</strong> has been formatted and directed to WhatsApp Business.
                </p>
                <button onClick={handleCloseModal} className="noir-btn" style={{ padding: "12px 28px" }}>
                  CLOSE WINDOW
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry}>
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      color: "#6b7280",
                      fontFamily: "monospace",
                    }}
                  >
                    COMMISSION INQUIRY // {inquiryProduct.indexCode}
                  </span>
                  <h2 style={{ fontSize: "24px", color: "#ffffff", fontWeight: "600", margin: "4px 0 0 0" }}>
                    {inquiryProduct.name}
                  </h2>
                  {inquiryProduct.price && (
                    <p style={{ color: "#d1d5db", fontSize: "13px", marginTop: "4px", fontFamily: "monospace" }}>
                      PRICING REFERENCE: <span style={{ fontWeight: "700", color: "#ffffff" }}>{inquiryProduct.price}</span>
                    </p>
                  )}
                </div>

                {/* Name */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "10px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "monospace" }}>
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
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Contact */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "10px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "monospace" }}>
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
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Custom Colors */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "10px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "monospace" }}>
                    PREFERRED PALETTE / SIZING (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={formData.customColors}
                    onChange={(e) => setFormData({ ...formData, customColors: e.target.value })}
                    placeholder="e.g. Earth tones, Specific dimensions"
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "13px",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: "28px" }}>
                  <label style={{ display: "block", fontSize: "10px", color: "#9ca3af", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.15em", fontFamily: "monospace" }}>
                    PROJECT NOTES & CONCEPT DETAILS
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe your vision or custom ideas..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
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
                  className="noir-btn"
                  style={{
                    width: "100%",
                    padding: "16px",
                  }}
                >
                  {isSubmitting ? "PREPARING WHATSAPP..." : "SEND COMMISSION REQUEST VIA WHATSAPP"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}