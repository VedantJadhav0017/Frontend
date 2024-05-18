import React from "react";
import mental1 from "../assets/mental1.jpg";
import mental2 from "../assets/mental2.jpg";
import mental3 from "../assets/mental3.jpg";
import mental4 from "../assets/mental4.jpg";
import { useSelector } from "react-redux";
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainHeader from "../components/MainHeader";
import Bar from "../components/Bar";
import TextBox from "../components/TextBox";

SwiperCore.use([Navigation, Autoplay]);

export default function Home() {
  const { currentUser } = useSelector((state) => state.user);

  const containerStyle = {
    color: '#333',
    fontFamily: "'Roboto', sans-serif",
    padding: '2rem',
    borderRadius: '0.75rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    margin: '5rem',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'linear-gradient(to right, #87CEEB, #ffffff)', // Gradient from sky blue to white
  };

  const slideImageStyle = {
    backgroundSize: 'cover',
    borderRadius: '0.75rem',
    height: '300px',
  };

  const largeTextStyle = {
    fontSize: '3.75rem',
    fontWeight: 700,
    textAlign: 'center',
    color: '#2d3748',
  };

  const centeredTextStyle = {
    paddingTop: '2rem',
    paddingBottom: '3rem',
    textAlign: 'center',
  };

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
      <MainHeader />
      <Bar buttontext={currentUser ? "Explore more" : "Get Started"} to={currentUser ? "/workers" : "/sign-in"} />
      
      <div style={containerStyle}>
        <Swiper navigation autoplay={{ delay: 2500, disableOnInteraction: false }}>
          {[mental1, mental2, mental3, mental4].map((photo, index) => (
            <SwiperSlide key={index}>
              <div
                style={{ ...slideImageStyle, background: `url(${photo}) center no-repeat` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <TextBox />

      <div style={centeredTextStyle}>
        <p style={largeTextStyle}>
          Do you want to hire or get hired?
        </p>
      </div>
    </div>
  );
}
