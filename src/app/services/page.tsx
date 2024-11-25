import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fleet from "../../../public/image/fleet.png";
import carleasing from "../../../public/image/carleasing.png";
import maintanence from "../../../public/image/maintanence.png";
import customercare from "../../../public/image/customercare1.png";

const Services: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>

      <div className="services-list">
        {/* Service 1 - Wide Range of Cars */}
        <div className="service-card">
          <Image src={fleet} alt="Car Sales" className="service-image" />
          <div className="service-card-content">
            <h2>Wide Range of Cars</h2>
            <p>
              Explore a vast collection of high-quality new and pre-owned vehicles suited to every need and budget. We are committed to providing vehicles that meet our customers expectations with top-notch performance and reliability.
            </p>
            <Link href="/carcollection">
              <button>Explore Cars</button>
            </Link>
          </div>
        </div>

        {/* Service 2 - Car Leasing */}
        <div className="service-card">
          <Image src={carleasing} alt="Car Leasing" className="service-image" />
          <div className="service-card-content">
            <h2>Car Leasing</h2>
            <p>
              Flexible and affordable leasing options tailored to meet your personal or business needs. Drive the latest models with low monthly payments and easy terms, giving you the freedom to upgrade whenever you desire.
            </p>
            <Link href="/about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>

        {/* Service 3 - Customization & Upgrades */}
        <div className="service-card">
          <Image src={maintanence} alt="Customization & Upgrades" className="service-image" />
          <div className="service-card-content">
            <h2>Customization & Upgrades</h2>
            <p>
              Transform your vehicle with our premium customization and upgrade services. From performance enhancements to interior modifications, we help you create a car that’s uniquely yours.
            </p>
            <Link href="/about">
              <button>Check Out</button>
            </Link>
          </div>
        </div>

        {/* Service 4 - Maintenance & Support */}
        <div className="service-card">
          <Image src={customercare} alt="Customer Care & Support" className="service-image" />
          <div className="service-card-content">
            <h2>Customer Care</h2>
            <p>
              Behind every car is a team of dedicated professionals who bring expertise, passion, and a commitment to excellence. We’re here to answer your questions, help with selections, and guide you through the process, so you feel confident every step of the way.
            </p>
            <Link href="/contact">
              <button>Meet Our Team</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
