import { Link } from 'react-router-dom';
import '../styles/Home.css';
import book1 from '../assets/Book1.jpg';
import book2 from '../assets/Book2.jpeg';
import book3 from '../assets/Book3.jpg';

function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: "Modol Duwa",
      author: "Mrs. Martin Wickramasinghe",
      price: 1500.00,
      image: book1
    },
    {
      id: 2,
      title: "Hath Pana",
      author: "Mrs. Kumaratunga Munidasa",
      price: 2150.00,
      image: book2
    },
    {
      id: 3,
      title: "Heensaraya",
      author: "Mrs. Kumaratunga Munidasa",
      price: 1800.00,
      image: book3
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to පොත් මැදුර</h1>
        <p>Discover your next favorite book</p>
        <Link to="/shop" className="cta-button">Shop Now</Link>
      </section>

      <section className="featured">
        <h2>Our Collection</h2>
        <div className="featured-books">
          {featuredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p className="price">LKR{book.price}</p>
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