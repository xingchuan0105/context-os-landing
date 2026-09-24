import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Vision from './sections/Vision';
import Product from './sections/Product';
import Studio from './sections/Studio';
import LatestPosts from './sections/LatestPosts';
import Social from './sections/Social';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Vision />
      <Product />
      <Studio />
      <LatestPosts />
      <Social />
      <Footer />
    </main>
  );
}
