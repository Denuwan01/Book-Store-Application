import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  ChevronDown,
  BookOpen
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const categories = [
  "Fiction",
  "Non-Fiction",
  "Science Fiction",
  "Mystery",
  "Romance",
  "Biography"
];

interface NavigationProps {
  cartItems?: number;
}

const Navigation = ({ cartItems = 0 }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">BookHaven</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 ${
                    location.pathname === item.path ? 'text-purple-600 dark:text-purple-400' : ''
                  }`}
                >
                  {item.name}
                </motion.span>
              </Link>
            ))}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 py-2 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                    onMouseEnter={() => setShowCategories(true)}
                    onMouseLeave={() => setShowCategories(false)}
                  >
                    {categories.map((category) => (
                      <Link key={category} to={`/shop?category=${category}`}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          {category}
                        </motion.span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books..."
                className="w-48 px-4 py-1 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-white"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Cart */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <ShoppingBag className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-600 text-white text-xs rounded-full">
                  {cartItems}
                </span>
              )}
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search books..."
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-white"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              {/* Mobile Menu Items */}
              {menuItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className={`block py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 ${
                      location.pathname === item.path ? 'text-purple-600 dark:text-purple-400' : ''
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}

              {/* Mobile Actions */}
              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-800">
                <ThemeToggle />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <ShoppingBag className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  {cartItems > 0 && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-600 text-white text-xs rounded-full">
                      {cartItems}
                    </span>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;