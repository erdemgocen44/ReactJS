import React from "react";

const Hero = () => {
  return (
    <section class="hero-02 full-screen py-6" id="hero">
      <div class="hero-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="hero-content text-center">
                <div class="hero-img">
                  <img src="assets/img/man-avator.png" alt="/" />
                </div>
                <h3 class="mb-0 mt-3">I'M John Doe</h3>
                <h1 class="text-capitalize mb-3">
                  <span class="base-color">A </span>
                  <span
                    class="element"
                    data-elements="UI Designer.,Web Designer.,Web Developer."
                  ></span>
                </h1>
                <a href="javascript:void(0);" class="pill-button-01">
                  Download Cv
                </a>
              </div>
            </div>
          </div>
          <div class="scroll-down">
            <a href="#about">
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
