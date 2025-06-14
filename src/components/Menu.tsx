"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
          Gyakuoni
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/" className="relative group">
            <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Home
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <div 
            className="relative"
            onMouseEnter={() => setIsOthersOpen(true)}
            onMouseLeave={() => setIsOthersOpen(false)}
          >
            <button className="relative group flex items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                その他
              </span>
              <svg 
                className={`w-4 h-4 transition-all duration-300 ${isOthersOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </button>
            {isOthersOpen && (
              <div className="absolute top-full right-0 mt-3 w-56 bg-white/95 dark:bg-black/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl py-3 transform opacity-0 animate-fadeIn">
                <Link 
                  href="/weather" 
                  className="group flex items-center px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300"
                >
                  <span className="text-2xl mr-3">🌤️</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Weather</span>
                </Link>
                <Link 
                  href="/about" 
                  className="group flex items-center px-5 py-3 hover:bg-gradient-to-r hover:from-green-50 hover:to-teal-50 dark:hover:from-green-900/20 dark:hover:to-teal-900/20 transition-all duration-300"
                >
                  <span className="text-2xl mr-3">ℹ️</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">About</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="group flex items-center px-5 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300"
                >
                  <span className="text-2xl mr-3">📧</span>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Contact</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}