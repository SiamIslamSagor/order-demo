'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import OrderForm from './components/OrderForm';
import Link from 'next/link';

export default function Home() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Get your water delivered in record time with our optimized delivery network."
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Only the finest, purified water sourced from natural springs and filtered to perfection."
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Sustainable packaging and carbon-neutral delivery to protect our planet."
    },
    {
      icon: "📱",
      title: "Smart Ordering",
      description: "Easy online ordering with real-time tracking and flexible scheduling."
    }
  ];

  const testimonials = [
    {
      avatar: "👨‍💼",
      name: "Michael Chen",
      role: "Business Owner",
      feedback: "AL Furkan has transformed our office water supply. Reliable, fast, and the quality is exceptional."
    },
    {
      avatar: "👩‍🏫",
      name: "Sarah Johnson",
      role: "Teacher",
      feedback: "As a busy professional, I love the convenience. Fresh water delivered right to my doorstep every week."
    },
    {
      avatar: "👴",
      name: "Robert Davis",
      role: "Retired",
      feedback: "The customer service is outstanding. They always go above and beyond to ensure satisfaction."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const openOrderForm = () => {
    setIsOrderFormOpen(true);
  };

  const closeOrderForm = () => {
    setIsOrderFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Unique Animated Header */}
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
                {/* Animated ring around logo */}
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
            {/* <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Products', 'Services', 'About', 'Contact'].map((item, index) => (
                
                <motion.a
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Products' ? '/products' : `#${item.toLowerCase()}`}
                  className={`transition-colors relative group ${
                    item === 'Home' ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    initial={{ scaleX: item === 'Home' ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav> */}

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Abstract Background Shape */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <motion.div 
          className="text-center max-w-4xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight"
            variants={itemVariants}
          >
            Pure Water
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Delivered
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Experience the future of water delivery. Premium quality, lightning-fast service, 
            and eco-friendly solutions delivered right to your doorstep.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <motion.button 
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openOrderForm}
            >
              Get Started Today
            </motion.button>
            
            <motion.a 
              href="/products"
              className="px-12 py-6 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Products
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AL Furkan</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We&apos;re not just delivering water, we&apos;re delivering an experience that transforms 
              the way you think about hydration.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say 
              about their experience with AL Furkan.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic">
                  &ldquo;{testimonial.feedback}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already transformed their water delivery experience.
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              className="px-12 py-6 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openOrderForm}
            >
              Start Your Journey
            </motion.button>
            
            <motion.a 
              href="/products"
              className="px-12 py-6 bg-transparent text-white text-xl font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Products
            </motion.a>
          </motion.div>
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

      {/* Order Form Modal */}
      <OrderForm 
        isOpen={isOrderFormOpen}
        onClose={closeOrderForm}
      />
    </div>
  );
}
