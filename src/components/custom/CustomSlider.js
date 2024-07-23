import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./custom-slider-style.css"

const WheelControls = (slider) => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export default function CustomSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      style={{ height: 850, minHeight: 680 }}
    >
      <div
        className="keen-slider__slide number-slide1"
        style={{
          padding: "5rem",
          backgroundImage: `url('/_images/sliders/slider-0.webp')`,
        }}
      >
        1
      </div>
      <div
        className="keen-slider__slide number-slide2"
        style={{
          padding: "5rem",
          backgroundImage: `url('/_images/sliders/slider-1.webp')`,
        }}
      >
        2
      </div>
      <div
        className="keen-slider__slide number-slide3"
        style={{
          padding: "5rem",
          backgroundImage: `url('/_images/sliders/slider-2.webp')`,
        }}
      >
        3
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{
          padding: "5rem",
          backgroundImage: `url('/_images/sliders/slider-3.webp')`,
        }}
      >
        4
      </div>
      {/* <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div> */}
    </div>
  );
}
