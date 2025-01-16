import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover Your Next
            <span className="text-purple-600 dark:text-purple-400"> Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Explore thousands of books from contemporary to classics
          </p>

          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books, authors, or genres..."
                className="w-full px-6 py-4 rounded-full border-2 border-purple-200 focus:border-purple-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            Start Reading Now
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <Book className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Feature {i}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Quick description here</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;