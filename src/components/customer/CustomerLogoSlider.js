import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const CustomerLogoSlider = () => {
  const swiperOption = {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 50,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      991: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <section className="cyber-brand-logo pt-80">
      <div className="container">
        <div className="row">
          <div className="brand-logo-slider">
            <Swiper {...swiperOption}>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/_images/brands/brand-1.png" width={107.9} height={42.11} alt="logo"  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/_images/brands/brand-2.png" width={345/2} height={91/2}  alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/_images/brands/brand-3.png" width={208/2} height={142/2}  alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <Image src="/_images/brands/brand-4.png" width={330/2} height={129/2}  alt="logo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogoSlider;
