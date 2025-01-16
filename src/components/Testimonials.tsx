import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "This bookshop has completely transformed my reading experience. The selection is incredible!",
    author: "Sarah Johnson",
    role: "Book Enthusiast"
  },
  {
    id: 2,
    text: "I love how easy it is to find new books. The recommendations are always spot on.",
    author: "Michael Chen",
    role: "Literature Professor"
  },
  {
    id: 3,
    text: "The best online bookstore I've ever used. The interface is intuitive and beautiful.",
    author: "Emma Thompson",
    role: "Writer"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          What Our Readers Say
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <Quote className="text-purple-500 w-12 h-12 mb-6" />
              <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                {testimonials[current].text}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[current].author}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
          >
            <ChevronLeft className="text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
          >
            <ChevronRight className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;