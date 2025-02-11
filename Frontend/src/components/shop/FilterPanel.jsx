import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const genres = [
  "All",
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Mystery",
  "Romance",
  "Biography"
];

const FilterPanel = ({ filters, setFilters, showFilters, setShowFilters }) => {
  const filterContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Genre</h3>
        <div className="space-y-2">
          {genres.map((genre) => (
            <label key={genre} className="flex items-center">
              <input
                type="radio"
                name="genre"
                checked={filters.genre === (genre === "All" ? "" : genre)}
                onChange={() => setFilters({ ...filters, genre: genre === "All" ? "" : genre })}
                className="form-radio text-purple-600"
              />
              <span className="ml-2 text-gray-700 dark:text-gray-300">{genre}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">Min Price</label>
            <input
              type="range"
              min="0"
              max="100"
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: Number(e.target.value) })}
              className="w-full"
            />
            <span className="text-sm text-gray-900 dark:text-white">Rs.{filters.minPrice}</span>
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400">Max Price</label>
            <input
              type="range"
              min="0"
              max="100"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
              className="w-full"
            />
            <span className="text-sm text-gray-900 dark:text-white">Rs.{filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Minimum Rating</h3>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: Number(e.target.value) })}
          className="w-full"
        />
        <span className="text-sm text-gray-900 dark:text-white">{filters.rating} stars</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Panel */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Filters</h2>
          {filterContent}
        </div>
      </div>

      {/* Mobile Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              {filterContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FilterPanel;