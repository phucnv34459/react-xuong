import React, { useEffect, useRef } from 'react'
import s from "./Banner.module.scss";

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const BannerSlide = bannerRef.current.querySelectorAll(`.${s.bannerSlide}`);
    let currentSlide = 0;

    function showSlide(slideIndex) {
        BannerSlide.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
      });
    }

    showSlide(currentSlide);

    const intervalId = setInterval(() => {
      var nextSlide = currentSlide + 1;
      if (nextSlide >= BannerSlide.length) {
        nextSlide = 0;
      }
      showSlide(nextSlide);
      currentSlide = nextSlide;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={s.bannerContainer} ref={bannerRef}>
      <div className={s.bannerSlides}>
        <div className={s.bannerSlide}>
          <img src="/src/assets/img/Banner.jpg" alt="Image 1" />
        </div>
        <div className={s.bannerSlide}>
          <img src="/src/assets/img/banner2.jpg" alt="Image 2" />
        </div>
        <div className={s.bannerSlide}>
          <img src="/src/assets/img/banner3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

