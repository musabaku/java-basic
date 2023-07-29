import React, { Fragment, useEffect } from "react";
import "./Home.css";
import TCshort from "./TCshort";
// import TopProperty from './TopProperty';
import CountStats from "./CountStats";
import AboutShort from "./AboutShort";
// import RecentBlog from './RecentBlog.jsx';
import BlogCard from "./BlogCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getProperty } from "../../../redux/actions/propertyAction";
import PropertyCard from "./PropertyCard.jsx";
import Loader from "../../Loader/Loader";
import turkish from "../../../images/turkciti.JPG";

const data = [
  {
    image: "https://i.ibb.co/5nrpTm0/big1.jpg",
    title: "Top Cities for Profitable Real Estate Investment in Turkey",
  },
  {
    image: "https://i.ibb.co/XxXMLs3/big2.jpg",
    title: "Exploring Turkey’s Booming Real Estate Market",
  },
  {
    image: "https://i.ibb.co/N2hv2QN/big3.jpg",
    title:
      "Impact of Changing Mortgage Interest Rates on Turkey’s Property Market",
  },
  {
    image: "https://i.ibb.co/YtwyWkM/big4.jpg",
    title: "Notaries Take the Lead: A New Era in Real Estate Transactions",
  },

  // Add more data objects as needed
];

const Home = () => {
  const { properties, loading } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperty());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <div className="main-box">
              <div className="header-text1">
                <h1>Welcome to Big Property Agency</h1>
                <p>Discover a World of Amazing Products</p>
                <a href="/products" className="explore-button">
                  Explore Now
                </a>
              </div>

              <div className="header-image1">
                <img src={turkish} alt="Logo" />
              </div>
            </div>
          </div>

          <h1 className="h1-popular">Popular Properties</h1>
          <div className="big-container">
            {properties &&
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
          </div>

          <TCshort />

          <AboutShort />
          
          <CountStats />
          <BlogCard data={data} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
