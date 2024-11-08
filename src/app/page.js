"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import { Input } from "@/components/ui/input";

export default function Home() {
  const howItWorksRef = useRef(null);

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const colors = ['#8B5CF6', '#6366F1', '#EC4899'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      document.body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden max-w-6xl">
      {/* Animated background shapes remain unchanged */}
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 right-0 w-3/4 h-3/4 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-3/4 h-3/4 bg-pink-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      {/* Wrap all content in a div with a higher z-index */}
      <div className="relative z-10">
        <section className="flex items-center mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold mb-4 text-white leading-tight" style={{color: 'white'}}>
                Fluorescent, a Beautiful Landing Page Template for all your needs.
              </h2>
              <p className="text-lg mb-8 max-w-md text-gray-100" style={{color: '#f3f4f6'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
                <Link href="https://example.com/app">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="w-full md:w-auto bg-white hover:bg-gray-200 text-black font-semibold" style={{backgroundColor: 'white', color: 'black'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Primary Button
                    </Button>
                  </motion.div>
                </Link>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full md:w-auto text-white border-white hover:bg-white hover:text-blue-900 transition-colors duration-200" 
                    onClick={scrollToHowItWorks}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Secondary Button
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Image
                src="/showcase.png"
                alt="Streamora Web Player"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full border-t border-white my-16 glow-border"
        ></motion.div>

        <section className="mt-24" ref={howItWorksRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 text-white text-center"
          >
            How It Works
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <Image
                  src="/snippet.svg"
                  alt="Code Snippet"
                  width={500}
                  height={300}
                  className="filter drop-shadow-lg"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-1/2"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Fetching YouTube Tracks</h3>
              <p className="text-gray-300 text-base mb-4">
                This code snippet shows how Streamora fetches YouTube search results directly from the YouTube website. 
                Streamora uses axios to make an HTTP GET request to YouTube&apos;s search page, simulating a browser environment 
                with a custom User-Agent header.
              </p>
              <p className="text-gray-300 text-base">
                After receiving the response, we extract the &apos;ytInitialData&apos; object, which contains the search results. 
                This approach allows us to retrieve up-to-date video information.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 text-white text-center"
          >
            Powerful Functionality
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Lines of Code</h3>
              <div className="text-6xl font-bold text-purple-500 mb-4">
                <NumberTicker value={4000} className="text-6xl" />
                <span className="text-3xl text-blue-500">+</span>
              </div>
              <p className="text-gray-300 text-base mb-4">
                YouTube wrapper built to give music fans an easy, feature-packed way to enjoy their music.
              </p>
              <p className="text-gray-300 text-base">
                The code brings quick searches and smooth playlist handling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:w-1/2"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
              <ul className="list-none text-gray-300 text-base space-y-2">
                {[
                  "Feature One Description Here",
                  "Another Amazing Feature",
                  "Third Impressive Feature",
                  "Fourth Unique Selling Point",
                  "Fifth Notable Feature",
                  "Sixth Compelling Reason",
                  "Seventh Stand-out Feature"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-10 text-white text-center"
          >
            More About Us
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">About Our Product</h3>
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-300 mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat.
                </p>
                <p className="text-gray-300 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.
                </p>
                <div className="flex space-x-4 mt-6">
                  <Link href="#">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 font-semibold">
                      Primary CTA
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 font-semibold">
                      Secondary CTA
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Common Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "First Common Question?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                  { q: "Second Common Question?", a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                  { q: "Third Common Question?", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco." },
                  { q: "Fourth Common Question?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
                  { q: "Fifth Common Question?", a: "Excepteur sint occaecat cupidatat non proident." },
                  { q: "Sixth Common Question?", a: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
                  { q: "Seventh Common Question?", a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem." }
                ].map((faq, index) => (
                  <div key={index}>
                    <h4 className="text-white font-semibold">{faq.q}</h4>
                    <p className="text-gray-300">{typeof faq.a === 'string' ? faq.a : faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}