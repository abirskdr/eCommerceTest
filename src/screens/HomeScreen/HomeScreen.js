import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import SmallSlider from "../../components/SliderSmall/SmallSlider";
import AdCards from "../../components/AdSection/AdCards";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Slider />
        <SmallSlider />
      </Container>
      <Footer />
      <AdCards />
    </>
  );
};
export default HomeScreen;
