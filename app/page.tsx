'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<null | {
    title: string;
    price: string;
    category: string;
  }>(null);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    notes: '',
  });

  const products = [
    {
      id: 1,
      title: 'Ewia Kete Hat',
      category: 'Headwear / Tapestry Crochet',
      price: 'GHC 350',
      imageSrc: '/Ewia Kete-Hat.jpg.jpg', // Update filename to match public folder
      tag: 'Signature Piece',
    },
    {
      id: 2,
      title: 'Tapestry Crochet Portrait',
      category: 'Fine Art / Wall Tapestry',
      price: 'Inquire for Pricing',
      imageSrc: '/Ewia Kete-Hat.jpg.jpg',
      tag: 'One of a Kind',
    },
    {
      id: 3,
      title: 'Bespoke Crochet Apparel',
      category: 'Signature Menswear',
      price: 'Inquire for Pricing',
      imageSrc: '/Ewia Kete-Hat.jpg.jpg',
      tag: 'Custom Fit',
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const message = `Hello Onyxx Threads, I would like to inquire about the *${selectedProduct.title}* (${selectedProduct.price}).%0A%0AName: ${formData.name}%0AContact: ${formData.contact}%0ANotes: ${formData.notes}`;
    
    // Opens WhatsApp with pre-filled order details
    window.open(`https://wa.me/?text=${message}`, '_blank');
    setSelectedProduct(null);
    setFormData({ name: '', contact: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-extrabold tracking-wider uppercase text-amber-400">
            ONYXX THREADS
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            <a href="#new" className="hover:text-zinc-100 transition-colors">New Arrivals</a>
            <a href="#collections" className="hover:text-zinc-100 transition-colors">Collections</a>
            <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-full transition-all">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto border-b border-zinc-900">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Handcrafted Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Elevated Wearable Art & Bespoke Tapestry
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Discover tactile tapestry crochet portraiture, bespoke menswear, and handcrafted artisan pieces crafted with meticulous detail.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#featured" className="px-6 py-3 font-medium bg-amber-400 text-zinc-950 rounded-lg hover:bg-amber-300 transition-all">
              Explore Works
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section id="featured" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Featured Works</h2>
            <p className="text-sm text-zinc-400 mt-1">Explore signature releases and custom pieces</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-zinc-900/50 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all">
              {/* Product Image Container */}
              <div className="aspect-square bg-zinc-900 relative overflow-hidden border-b border-zinc-800/50 flex items-center justify-center p-2">
                <span className="absolute top-4 left-4 z-10 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-zinc-950/70 text-amber-400 border border-amber-400/20 backdrop-blur-md">
                  {product.tag}
                </span>
                <img 
                  src={product.imageSrc} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <p className="text-xs text-amber-400 font-medium">{product.category}</p>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-amber-300 transition-colors">{product.title}</h3>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-400">{product.price}</span>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="px-3 py-1.5 text-xs font-medium border border-zinc-700 hover:border-amber-400 hover:text-amber-400 rounded-lg transition-all"
                  >
                    Inquire / Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry / Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md relative space-y-4 shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-lg"
            >
              ✕
            </button>
            <div>
              <span className="text-xs text-amber-400 uppercase tracking-widest font-semibold">Custom Order / Inquiry</span>
              <h3 className="text-xl font-bold text-zinc-100 mt-1">{selectedProduct.title}</h3>
              <p className="text-sm text-amber-400 font-medium">{selectedProduct.price}</p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Kwesi Mensah"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Phone Number / WhatsApp</label>
                <input 
                  type="text" 
                  required
                  placeholder="+233 XX XXX XXXX"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Customization / Sizing Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Specify size, color preference, or custom order requests..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-amber-400 text-zinc-950 font-semibold rounded-lg hover:bg-amber-300 transition-all text-sm"
              >
                Send Order Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}