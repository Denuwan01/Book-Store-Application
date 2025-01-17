import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, X, SlidersHorizontal } from 'lucide-react';
import toast from 'react-hot-toast';
import QuickViewModal from './QuickViewModal';
import FilterPanel from './FilterPanel';

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    price: 19.99,
    rating: 4.5,
    description: "Between life and death there is a library, and within that library, the shelves go on forever...",
    genre: "Fiction"
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800",
    price: 24.99,
    rating: 5,
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides...",
    genre: "Science Fiction"
  },
  // Add more books as needed
];

const ShopPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({
    genre: '',
    minPrice: 0,
    maxPrice: 100,
    rating: 0
  });

  const addToCart = (book) => {
    toast.success(`${book.title} added to cart!`, {
      icon: '🛒',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const filteredBooks = books.filter(book => {
    if (filters.genre && book.genre !== filters.genre) return false;
    if (book.price < filters.minPrice || book.price > filters.maxPrice) return false;
    if (book.rating < filters.rating) return false;
    return true;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Shop Books</h1>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Book Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div
                    className="relative aspect-[3/4] cursor-pointer"
                    onClick={() => setSelectedBook(book)}
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {book.author}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(book.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        ${book.price}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => addToCart(book)}
                      className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedBook && (
          <QuickViewModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopPage;