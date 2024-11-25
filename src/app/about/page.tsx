import Image from "next/image";
import mission1 from "../../../public/image/mission1.png";
import customercare2 from "../../../public/image/costomercare2.png";
import services from "../../../public/image/services.png";

export default function About() {
  return (
    <>
      <main className="about-main">
        <section className="hero1-section">
          <div className="hero-content">
            <h1 className="hero-title">Get to Know Us</h1>
            <h2 className="hero-subtitle">
              Driven by Passion, Designed for You
            </h2>
            <p className="hero-description">
              Your journey to the perfect car begins with us. From quality to
              customer care, we bring unmatched service to match you with the
              ideal car.
            </p>
          </div>
        </section>

        <div className="info-card">
          <Image
            src={mission1}
            alt="Our Mission"
            width="500"
            height="200"
            className="info-card-image"
          />
          <div className="info-card-text">
            <h2 className="info-card-title">Our Mission</h2>
            <p className="info-card-description">
              We believe that finding the right car is more than just a
              purchase—it’s a path to freedom, adventure, and self-expression.
              Our mission is to bridge the gap between dreams and reality,
              putting our expertise to work to match you with a car that’s a
              true reflection of you.
            </p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-text">
            <h2 className="info-card-title">Our Services</h2>
            <p className="info-card-description">
              We provide flexible leasing, easy payment plans, customizations
              to match your style, and complete maintenance to keep your car in
              top condition. From start to finish, our services ensure a smooth,
              personalized driving experience.
            </p>
          </div>
          <Image
            src={services}
            alt="Our Services"
            width="500"
            height="200"
            className="info-card-image"
          />
        </div>

        <div className="info-card">
          <Image
            src={customercare2}
            alt="Customer Care & Support"
            width="500"
            height="200"
            className="info-card-image"
          />
          <div className="info-card-text">
            <h2 className="info-card-title">Customer-First Approach</h2>
            <p className="info-card-description">
              We listen, understand, and prioritize your needs, curating a range
              of vehicles with you in mind. From browsing to buying, we’re here
              to support you with insights, guidance, and an unforgettable
              experience.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
