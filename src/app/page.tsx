import Image from "next/image";
import Link from 'next/link';
import bgcar from "../../public/image/bgcar.jpg";
import pay from "../../public/image/pay.png";
import fastdelivery from "../../public/image/fastdelivery.png";
import costomer from "../../public/image/costomer.jpg";
import collection1 from '../../public/image/collection1.jpg';
import collection01 from "../../public/image/collection01.jpg";
import collection02 from "../../public/image/collection02.jpg";
import collection06 from "../../public/image/collection06.jpg";
import collection08 from "../../public/image/collection08.jpg";
import collection10 from "../../public/image/collection10.jpg";
// import "../../styles/Home.css"; // Import the external CSS

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Where Deals and Dreams Drive Together</h1>
          <h3>
            Choose from <span className="highlight">1,000+</span> New Cars Ready for You
          </h3>
          <p>
            Find the car that fits your dreams and budget—quality and value, ready to drive with confidence.
          </p>
          <Link href="/carcollection">
            <button className="cta-button">Explore Our Collection</button>
          </Link>
          <br />
          <Link href="/contact">
            <button className="cta-button">Find Us</button>
          </Link>
        </div>
        <Image src={bgcar} alt="Car image"height={350} width={200} className="hero-image" />
      </section>

      {/* Discover Our Cars Section */}
      <section className="discover-section">
        <h2>Discover Our Cars</h2>
        <p>
          Whether you are starting your search or ready to choose, we are here to help. Explore our cars and see why so many trust us with their automotive needs.
        </p>
        <div className="car-gallery">
          {[collection1, collection01, collection02, collection06, collection08, collection10].map((car, index) => (
            <Image key={index} src={car} alt="Car collection"height={350} width={350} className="car-image" />
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <h2>Why Choose FleetForge?</h2>
        <p className="subtitle">
          With a focus on quality, transparency, and customer satisfaction, we strive to make car buying a joyful, hassle-free experience.
        </p>
        <div className="why-choose-grid">
          <div className="feature">
            <Image src={pay} alt="Payment options" className="feature-image" />
            <p>Our flexible, buyer-friendly payment options make it easy to drive your ideal car with confidence and convenience.</p>
          </div>
          <div className="feature">
            <Image src={fastdelivery} alt="Fast delivery" className="feature-image" />
            <p>We provide fast, secure vehicle delivery worldwide, ensuring your car arrives safely, wherever you are.</p>
          </div>
          <div className="feature">
            <Image src={costomer} alt="Customer satisfaction" className="feature-image" />
            <p>Customer satisfaction is our top priority, and we’re committed to delivering an exceptional experience with every purchase.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
