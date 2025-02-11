import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 19.99,
      image: "https://picsum.photos/200/300"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 21.99,
      image: "https://picsum.photos/200/300"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 18.99,
      image: "https://picsum.photos/200/300"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to BookStore</h1>
        <p>Discover your next favorite book</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </section>

      <section className="featured">
        <h2>Featured Books</h2>
        <div className="featured-books">
          {featuredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p className="price">${book.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="introduction">
        <h2>About Us</h2>
        <p>We're passionate about bringing you the best selection of books at great prices. Our carefully curated collection includes everything from bestsellers to rare finds.</p>
        <Link to="/about" className="learn-more">Learn More</Link>
      </section>
    </div>
  );
}

export default Home