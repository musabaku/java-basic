import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const obj = {
  images: [
    "https://i.ibb.co/5nrpTm0/big1.jpg",
    "https://i.ibb.co/XxXMLs3/big2.jpg",
    "https://i.ibb.co/N2hv2QN/big3.jpg",
    "https://i.ibb.co/YtwyWkM/big4.jpg",
    "https://i.ibb.co/N13xKHs/big5.jpg",
    "https://i.ibb.co/gWHyxcg/big6.jpg",
    "https://i.ibb.co/PDCmRf8/big7.jpg",
    "https://i.ibb.co/37CYdbH/big8.jpg"
  ],
  name: [
    "BIG 101 - Luxury Apartments For Sale With Amazing Sea View",
    "BIG 102 - Spacious Family Home in a Prime Location",
    "BIG 103 - Modern Condo with Top-notch Amenities",
    "BIG 104 - Stylish Urban Loft with Panoramic Views",
    "BIG 105 - Elegant Villa with Private Pool and Garden",
    "BIG 106 - Contemporary Penthouse with Skyline Views",
    "BIG 107 - Prestige Flats with Bosphorus Lake Views",
    "BIG 108 - Huge Penthouse with City Skyline Views",
  ],
  location: [
    "Avcilar, Istanbul",
    "Kadikoy, Istanbul",
    "Besiktas, Istanbul",
    "Sisli, Istanbul",
    "Beyoglu, Istanbul",
    "Uskudar, Istanbul",
    "Beylikduzu, Istanbul",
    "Kartal, Istanbul",
  ],
  price: ["$250,000", "$300,000", "$350,000", "$400,000", "$550,000", "$650,000", "$290,000", "$590,000"],
  beds: [4, 3, 2, 5, 3, 4, 3],
  area: [200, 180, 150, 300, 250, 220, 300],
  baths: [3, 2, 2, 4, 2, 3, 2],
};

const Contact = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Set the carousel to slide automatically
    autoplaySpeed: 1000, // Set the time interval between slides (in milliseconds)
  };

  return (
    <div>
      <h2>hhhhh</h2>
    {/* <Slider {...settings}>
      {obj.images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`big${index + 1}`} />
          <div >
            <h2>{obj.name[index]}</h2>
            <p>{obj.location[index]}</p>
            <p>Price: {obj.price[index]}</p>
            <p>Beds: {obj.beds[index]}</p>
            <p>Area: {obj.area[index]} sqft</p>
            <p>Baths: {obj.baths[index]}</p>
          </div>
        </div>
      ))}
    </Slider> */}
  </div>
  );
};

export default Contact;
