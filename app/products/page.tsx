'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import DeliveryForm from '../components/DeliveryForm';
import OrderForm from '../components/OrderForm';

export default function ProductsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    price: string;
    image: string;
  } | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const products = [
    {
      name: "Spring Water",
      description: "Natural spring water from pristine mountain sources, filtered through natural rock formations for pure taste and essential minerals.",
      price: "$2.99",
      image: "💧",
      tag: "Most Popular",
      size: "500ml",
      features: ["Natural source", "Mineral rich", "Pure taste"]
    },
    {
      name: "Purified Water",
      description: "Advanced filtration technology removes impurities while maintaining essential minerals for optimal hydration and health benefits.",
      price: "$3.49",
      image: "🚰",
      tag: "Best Value",
      size: "1L",
      features: ["Advanced filtration", "Pure & clean", "Great value"]
    },
    {
      name: "Mineral Water",
      description: "Enhanced with essential minerals like calcium, magnesium, and potassium for maximum health benefits and superior taste.",
      price: "$4.99",
      image: "💎",
      tag: "Premium",
      size: "750ml",
      features: ["Mineral enhanced", "Health benefits", "Premium quality"]
    },
    {
      name: "Alkaline Water",
      description: "pH-balanced water with antioxidant properties to help neutralize acidity and promote better hydration and wellness.",
      price: "$5.99",
      image: "⚡",
      tag: "New",
      size: "1L",
      features: ["pH balanced", "Antioxidant", "Wellness focused"]
    },
    {
      name: "Distilled Water",
      description: "Pure H2O with all impurities removed, perfect for medical use, cooking, and sensitive applications requiring absolute purity.",
      price: "$3.99",
      image: "🔬",
      tag: "Specialty",
      size: "500ml",
      features: ["100% pure", "Medical grade", "Versatile use"]
    },
    {
      name: "Sparkling Water",
      description: "Naturally carbonated water with a refreshing fizz, perfect for those who enjoy bubbly beverages without added sugars.",
      price: "$4.49",
      image: "🫧",
      tag: "Refreshing",
      size: "330ml",
      features: ["Natural fizz", "Sugar free", "Refreshing taste"]
    }
  ];

  const categories = [
    { name: "All Products", icon: "🌟", active: true },
    { name: "Spring Water", icon: "💧" },
    { name: "Purified", icon: "🚰" },
    { name: "Mineral", icon: "💎" },
    { name: "Specialty", icon: "⚡" }
  ];

  const handleAddToCart = (product: {
    name: string;
    price: string;
    image: string;
  }) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setSelectedProduct(null);
  };

  const openOrderForm = () => {
    setIsOrderFormOpen(true);
  };

  const closeOrderForm = () => {
    setIsOrderFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">AF</span>
                </div>
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AL Furkan
                </h1>
                <p className="text-xs text-slate-500">Pure Water Delivery</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'Services', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Products' ? '/products' : `#${item.toLowerCase()}`}
                  className={`transition-colors relative group ${
                    item === 'Products' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    initial={{ scaleX: item === 'Products' ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={openOrderForm}
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Products</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our comprehensive range of premium water products, each carefully selected and 
            delivered to meet your specific hydration needs and lifestyle preferences.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  category.active 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Product Tag */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image */}
                <div className="text-center mb-6">
                  <motion.div 
                    className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.image}
                  </motion.div>
                </div>

                {/* Product Info */}
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-center mb-4 text-sm">
                  {product.size}
                </p>
                <p className="text-slate-600 text-center mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {product.price}
                  </div>
                  <motion.button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart({
                      name: product.name,
                      price: product.price,
                      image: product.image
                    })}
                  >
                    Add to Cart
                  </motion.button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Order Your Water?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Choose from our premium selection and experience the difference that quality water makes in your daily life.
          </p>
          <motion.button 
            className="px-12 py-6 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openOrderForm}
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AF</span>
                </div>
                <span className="text-2xl font-bold">AL Furkan</span>
              </div>
              <p className="text-slate-300 max-w-md">
                Delivering pure water and exceptional service to homes and businesses across the region.
              </p>
            </div>
            
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
              <Link href="/products" className="text-slate-300 hover:text-white transition-colors">Products</Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors">Services</Link>
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
              <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2024 AL Furkan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Delivery Form Modal */}
      <DeliveryForm 
        isOpen={isFormOpen}
        onClose={closeForm}
        product={selectedProduct}
      />

      {/* Order Form Modal */}
      <OrderForm 
        isOpen={isOrderFormOpen}
        onClose={closeOrderForm}
      />
    </div>
  );
}
