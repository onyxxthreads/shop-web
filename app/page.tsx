"use client";

import { useState } from "react";

interface Product {
  id: string;
  title: string;
  category: "apparel" | "tapestry" | "archive";
  price: string;
  status: "Available" | "Sold / Private Collection" | "Custom Pre-Order";
  details: string;
  materials: string;
  stitches?: string;
  mediaType: "image" | "video";
  mediaSrc: string;
}

const PRODUCTS: Product[] = [
  {
    id: "nkrumah-portrait",
    title: "Hi3ny3l) (Osagyefo Kwame Nkrumah)",
    category: "archive",
    price: "Private Collection",
    status: "Sold / Private Collection",
    details: "124x124 mathematical grid tapestry portraiture (15,376 stitches) exhibited at Origins Gallery for 'African Spaces Redefined'.",
    materials: "Milk Cotton Yarn",
    stitches: "15,376 stitches",
    mediaType: "image",
    mediaSrc: "/nkrumah.jpg",
  },
  {
    id: "dromo",
    title: "Dromo (Grace)",
    category: "tapestry",
    price: "Inquire via WhatsApp",
    status: "Available",
    details: "9,720-stitch monochromatic white tapestry artwork featuring an integrated physical cowrie shell necklace.",
    materials: "Milk Cotton Yarn & Mixed Media",
    stitches: "9,720 stitches",
    mediaType: "image",
    mediaSrc: "/dromo.jpg",
  },
  {
    id: "ewia-kete-hat",
    title: "Ewia Kete Hat",
    category: "apparel",
    price: "GHC 350",
    status: "Available",
    details: "High-density hand-crocheted structured headwear designed with precise stitch definition.",
    materials: "5-Ply Premium Milk Cotton",
    mediaType: "image",
    mediaSrc: "/ewia-kete-hat.jpg",
  },
  {
    id: "trinity-hat",
    title: "Trinity Hat",
    category: "apparel",
    price: "GHC 350 - GHC 400",
    status: "Custom Pre-Order",
    details: "Bespoke textured silhouette hat crafted to custom fit specifications.",
    materials: "Milk Cotton Yarn",
    mediaType: "video",
    mediaSrc: "/trinity hat.mp4",
  },
  {
    id: "bala-series",
    title: "Bala Portrait Commission",
    category: "tapestry",
    price: "Custom Commission",
    status: "Sold / Private Collection",
    details: "Custom commissioned high-detail tapestry portrait crafted for client collection.",
    materials: "Milk Cotton Yarn",
    mediaType: "image",
    mediaSrc: "/bala 1.jpg",
  },
  {
    id: "cross-portrait",
    title: "Cross Portrait Series",
    category: "tapestry",
    price: "Inquire via WhatsApp",
    status: "Available",
    details: "Detailed tapestry crochet exploration showcasing intricate tonal gradient work.",
    materials: "Milk Cotton Yarn",
    mediaType: "image",
    mediaSrc: "/cross 1.jpg",
  },
  {
    id: "dog-series",
    title: "Bespoke Pet Tapestry",
    category: "tapestry",
    price: "Custom Commission",
    status: "Sold / Private Collection",
    details: "Custom-mapped grid portrait commissioned for private client collection.",
    materials: "Milk Cotton Yarn",
    mediaType: "image",
    mediaSrc: "/dog 1.jpg",
  },
  {
    id: "flame-series",
    title: "Flame Motif Tapestry",
    category: "tapestry",
    price: "Inquire via WhatsApp",
    status: "Available",
    details: "High-contrast geometric tapestry piece featuring dynamic colorwork.",
    materials: "Milk Cotton Yarn",
    mediaType: "image",
    mediaSrc: "/flame 1.jpg",
  },
  {
    id: "pacman-series",
    title: "Pop Culture Tapestry Series",
    category: "tapestry",
    price: "Inquire via WhatsApp",
    status: "Available",
    details: "Nostalgic mixed-media tapestry piece crafted with precise color blocking.",
    materials: "Milk Cotton Yarn",
    mediaType: "image",
    mediaSrc: "/pacman 1.jpg",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"all" | "apparel" | "tapestry" | "archive">("all");
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [showCommissionGuide, setShowCommissionGuide] = useState<boolean>(false);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "archive") return product.status === "Sold / Private Collection";
    return product.category === activeCategory;
  });

  const handleWhatsAppInquiry = (productTitle: string, price: string) => {
    const text = `Hello Onyxx Threads, I would like to inquire about "${productTitle}" (${price}).`;
    window.open(`https://wa.me/233543312793?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleGeneralCommission = () => {
    const text = "Hello Onyxx Threads, I would like to initiate a custom commission (Tapestry Portrait / Garment).";
    window.open(`https://wa.me/233543312793?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050507] text-[#f3f4f6] px-4 py-8 md:px-12 md:py-12">
      {/* Header Navigation */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-12 gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase font-mono text-white">
            Onyxx Threads
          </h1>
          <p className="text-xs font-mono text-gray-400 mt-1 tracking-widest uppercase">
            Tapestry Portraiture & Custom Fiber Art // Accra, Ghana
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowCommissionGuide(true)}
            className="noir-pill"
          >
            [ Custom Commission Guide ]
          </button>
          <button
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "noir-pill-active" : "noir-pill"}
          >
            All Works
          </button>
          <button
            onClick={() => setActiveCategory("tapestry")}
            className={activeCategory === "tapestry" ? "noir-pill-active" : "noir-pill"}
          >
            Tapestry Art
          </button>
          <button
            onClick={() => setActiveCategory("apparel")}
            className={activeCategory === "apparel" ? "noir-pill-active" : "noir-pill"}
          >
            Apparel
          </button>
          <button
            onClick={() => setActiveCategory("archive")}
            className={activeCategory === "archive" ? "noir-pill-active" : "noir-pill"}
          >
            Archive / Sold
          </button>
        </div>
      </header>

      {/* Main Grid Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="noir-card flex flex-col justify-between p-5 rounded-none">
            <div>
              {/* Media Preview Box */}
              <div className="relative aspect-square overflow-hidden bg-black/40 border border-white/5 mb-5 flex items-center justify-center">
                {product.mediaType === "video" ? (
                  <video
                    src={product.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={product.mediaSrc}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 left-3">
                  <span className="noir-tag">{product.status}</span>
                </div>
              </div>

              {/* Title & Specs */}
              <h2 className="text-lg font-bold font-mono text-white tracking-wide uppercase mb-1">
                {product.title}
              </h2>
              {product.stitches && (
                <div className="text-[11px] font-mono text-gray-400 mb-2 tracking-widest uppercase">
                  {product.stitches}
                </div>
              )}
              <p className="text-xs font-mono text-gray-300 leading-relaxed mb-4">
                {product.details}
              </p>
              <div className="text-[11px] font-mono text-gray-500 mb-6">
                Material: {product.materials}
              </div>
            </div>

            {/* Price & Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-bold font-mono text-white tracking-wider">
                {product.price}
              </span>
              <button
                onClick={() => setInquiryProduct(product)}
                className="noir-btn px-4 py-2"
              >
                Inquire →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ITEM INQUIRY MODAL */}
      {inquiryProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            backdropFilter: "blur(20px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="noir-card noir-modal-content"
            style={{
              width: "100%",
              maxWidth: "520px",
              padding: "36px",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
            }}
          >
            <button
              onClick={() => setInquiryProduct(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white font-mono text-xs tracking-widest"
            >
              [ ESC // CLOSE ]
            </button>

            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
              // Direct Inquiry
            </span>
            <h3 className="text-xl font-bold font-mono text-white uppercase mt-1 mb-3">
              {inquiryProduct.title}
            </h3>

            <p className="text-xs font-mono text-gray-300 leading-relaxed mb-6">
              {inquiryProduct.details}
            </p>

            <div className="bg-white/5 border border-white/10 p-4 mb-6 font-mono text-xs space-y-2">
              <div><span className="text-gray-500">Status:</span> <span className="text-white">{inquiryProduct.status}</span></div>
              <div><span className="text-gray-500">Valuation / Price:</span> <span className="text-white">{inquiryProduct.price}</span></div>
              <div><span className="text-gray-500">Material Spec:</span> <span className="text-white">{inquiryProduct.materials}</span></div>
              {inquiryProduct.stitches && (
                <div><span className="text-gray-500">Stitch Density:</span> <span className="text-white">{inquiryProduct.stitches}</span></div>
              )}
            </div>

            <button
              onClick={() => {
                handleWhatsAppInquiry(inquiryProduct.title, inquiryProduct.price);
                setInquiryProduct(null);
              }}
              className="noir-btn w-full py-3"
            >
              Send WhatsApp Inquiry (+233 54 331 2793) →
            </button>
          </div>
        </div>
      )}

      {/* DEDICATED COMMISSION GUIDE MODAL */}
      {showCommissionGuide && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(20px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="noir-card noir-modal-content"
            style={{
              width: "100%",
              maxWidth: "680px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "36px",
              position: "relative",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.9)",
            }}
          >
            <button
              onClick={() => setShowCommissionGuide(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white font-mono text-xs tracking-widest"
            >
              [ ESC // CLOSE ]
            </button>

            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                // Bespoke Workflow & Order Process
              </span>
              <h2 className="text-xl font-bold font-mono uppercase tracking-wider text-white mt-1">
                Custom Commission Guide
              </h2>
            </div>

            <div className="space-y-5 font-mono text-xs">
              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-bold tracking-widest mb-1 text-sm">
                  01 // CONCEPT & GRID MAPPING
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Every tapestry portrait begins with high-density image mapping. We translate reference photos into exact mathematical grid dimensions to determine stitch counts, contrast, and color balance.
                </p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-bold tracking-widest mb-1 text-sm">
                  02 // MATERIAL & PALETTE SPECIFICATION
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Crafted using 5-ply or 4-ply milk cotton yarn for crisp stitch stability. Mixed-media integrations—such as bouclé textures or physical cowrie shell adornments—are mapped into the piece.
                </p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-bold tracking-widest mb-1 text-sm">
                  03 // HANDCRAFTING & PROGRESS ARCHIVE
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Pieces are hand-crocheted over hundreds of hours (ranging from 9,000+ to over 15,000+ individual stitches). Direct milestone updates are sent during crafting.
                </p>
              </div>

              <div className="border border-white/10 p-4 bg-white/[0.02]">
                <div className="text-white font-bold tracking-widest mb-1 text-sm">
                  04 // COMPLETION & WORLDWIDE DELIVERY
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Upon completion, artworks are prepared for custom framing or wearable finishing and dispatched worldwide directly from Accra, Ghana.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Direct Inquiry: +233 54 331 2793
              </span>
              <button
                onClick={() => {
                  handleGeneralCommission();
                  setShowCommissionGuide(false);
                }}
                className="noir-btn w-full sm:w-auto px-6 py-3"
              >
                Initiate Custom Commission →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}