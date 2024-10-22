import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;
