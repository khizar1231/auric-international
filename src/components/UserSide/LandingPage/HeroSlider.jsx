
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Keyboard,
} from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "../../../HeroSlider.css";

import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: assets.Image6,
    title: "ELEVATE",
    title2: "YOUR GAME",
    subtitle: "Premium FashionWear ",
  },
  {
    image: assets.Image7,
    title: "Auric Internation",
    title2: "The Best Apparel Manufacturer",
    subtitle: "WordWide Access",
  },
  {
    image: assets.Image8,
    title: "The ",
    title2: "Premium Sports Wear",
    subtitle: "Engineered For Athletes",
  },
  {
    image: assets.Image9,
    title: "Your Customization",
    title2: "Our Manufacturing",
    subtitle: "Grow your brand with us",
  },
  
 
];

export default function HeroSlider() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">

      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Pagination,
          Keyboard,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        keyboard={{
          enabled: true,
        }}
        speed={1100}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div className="hero-slide">

              <img
                src={slide.image}
                className="hero-image"
                loading="lazy"
              />

              <div className="hero-gradient"></div>

              <div className="hero-vignette"></div>

              <div className="hero-noise"></div>

              <div className="hero-content">

                <motion.div
                  key={slide.title}
                  initial={{
                    opacity: 0,
                    x: -80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: .9,
                  }}
                >

                  <div className="hero-line"></div>

                  <p className="hero-small">
                    PREMIUM Apparel
                  </p>

                  <h2 className="hero-bg-title">
                    SPORT
                  </h2>

                  <h1 className="hero-title">

                    <span>{slide.title}</span>

                    <span>{slide.title2}</span>

                  </h1>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: .3,
                    }}
                    className="hero-subtitle"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: .6,
                    }}
                  >
                   <button
                    onClick={() => navigate("/product")}
                    className="hero-btn"
                  >
                    SHOP NOW
                    <span>→</span>
                  </button>

                  </motion.div>

                </motion.div>

              </div>

              <div className="hero-scroll">

                SCROLL

                <div className="scroll-line"></div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
