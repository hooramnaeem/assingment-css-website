
import Image from "next/image";

import collection1 from "../../../public/image/collection1.jpg"
import collection01 from "../../../public/image/collection01.jpg";
import collection02 from "../../../public/image/collection02.jpg";
import collection06 from "../../../public/image/collection06.jpg";
import collection08 from "../../../public/image/collection08.jpg";
import collection10 from "../../../public/image/collection10.jpg";
import collection17 from "../../../public/image/collection17.png";
import images28 from "../../../public/image/images28.png";
import images24 from "../../../public/image/images24.png";
import images23 from "../../../public/image/images23.png";
import images18 from "../../../public/image/images18.png";
import images17 from "../../../public/image/images17.png";
import images15 from "../../../public/image/images15.png";
import imagenew from "../../../public/image/imagenew.png";
import images12 from "../../../public/image/images12.png";


export default function Collection() {
  return (
    <>
      <main className="main">
        <section className="section section-xlarge">
          <div className="heading heading-large">
            <h1 className="heading-text">
              Discover the Drive of Your Dreams at FleetForge!
            </h1>
          </div>
          <div>
            <p className="paragraph">
              Explore FleetForge’s curated collection—quality cars crafted for
              every lifestyle. Find your perfect ride and drive with confidence!
            </p>
          </div>

          <div className="grid grid-large">
            {[
              { src: collection1, title: "Audi", price: "$22,440" },
              { src: collection01, title: "Honda Aspire", price: "$29,500" },
              { src: collection02, title: "Ford", price: "$31,490" },
              { src: collection06, title: "Chevrolet", price: "$54,840" },
              { src: collection08, title: "Cadillac Escalado", price: "$37,230" },
              { src: collection10, title: "Chrysler", price: "$33,440" },
              { src: images28, title: "Honda", price: "$42,890" },
              { src: images24, title: "Cadillac Escalado", price: "$28,740" },
              { src: images23, title: "Chrysler", price: "$51,400" },
              { src: images18, title: "Cadillac Escalado", price: "$34,140" },
              { src: images17, title: "Lamborghini", price: "$42,490" },
              { src: images15, title: "Cadillac Escalado", price: "$60,000" },
              { src: collection17, title: "Ford", price: "$32,990" },
              { src: imagenew, title: "Honda Spark", price: "$53,400" },
              { src: images12, title: "Bentley", price: "$32,940" },
            ].map((car, index) => (
              <div key={index} className="card">
                <Image
                  src={car.src}
                  height={200}
                  width={200}
                  alt={`${car.title} image`}
                  className="card-image"
                />
                <p className="card-title">{car.title}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="card-price">{car.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
