import { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Shop.css';
import book4 from '../assets/Book4.jpg';

function Shop() {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    {
      id: 1,
      title: "Kirihami",
      author: "Mrs. Sibil Weththasinghe",
      price: 1200.00,
      image: book4
    },
    // Add more books here
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p className="price">LKR {book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop