import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useMeasure from 'react-use-measure';

const categories = [
  { id: 1, name: "Fiction", icon: "📚" },
  { id: 2, name: "Non-Fiction", icon: "📖" },
  { id: 3, name: "Science", icon: "🔬" },
  { id: 4, name: "History", icon: "🏛️" },
  { id: 5, name: "Biography", icon: "👤" },
  { id: 6, name: "Poetry", icon: "✒️" },
  { id: 7, name: "Mystery", icon: "🔍" },
  { id: 8, name: "Romance", icon: "💝" }
];

const Categories = () => {
  const [ref, bounds] = useMeasure();
  const { scrollX } = useScroll();
  const opacity = useTransform(scrollX, [0, 100], [1, 0.5]);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Browse Categories
        </motion.h2>

        <div className="overflow-x-auto" ref={ref}>
          <motion.div
            style={{ opacity }}
            className="flex space-x-6 pb-6 min-w-max"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center cursor-pointer"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Categories;