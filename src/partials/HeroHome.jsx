import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* <svg
          width="1360"
          height="600"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{
              opacity: 0.2,
            }}
            data-name="Layer 1"
          >
            <ellipse
              cx={671.09}
              cy={521.74}
              rx={505.11}
              ry={682.58}
              transform="rotate(-73.8 671.066 521.74)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={659.06}
              cy={526.68}
              rx={491.75}
              ry={665.17}
              transform="rotate(-73.68 659.09 526.686)"
              style={{
                strokeWidth: ".98px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={647.03}
              cy={531.62}
              rx={478.4}
              ry={647.77}
              transform="rotate(-73.56 647.043 531.627)"
              style={{
                strokeWidth: ".95px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={634.99}
              cy={536.56}
              rx={465.05}
              ry={630.36}
              transform="rotate(-73.43 635.044 536.57)"
              style={{
                strokeWidth: ".93px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={622.96}
              cy={541.51}
              rx={451.7}
              ry={612.96}
              transform="rotate(-73.3 622.965 541.509)"
              style={{
                strokeWidth: ".9px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={610.92}
              cy={546.45}
              rx={438.35}
              ry={595.56}
              transform="rotate(-73.16 610.916 546.447)"
              style={{
                strokeWidth: ".88px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={598.89}
              cy={551.39}
              rx={425.01}
              ry={578.16}
              transform="rotate(-73.01 598.89 551.386)"
              style={{
                strokeWidth: ".85px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={586.85}
              cy={556.33}
              rx={411.66}
              ry={560.77}
              transform="rotate(-72.85 586.881 556.332)"
              style={{
                strokeWidth: ".83px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={574.82}
              cy={561.27}
              rx={398.32}
              ry={543.38}
              transform="rotate(-72.68 574.874 561.28)"
              style={{
                strokeWidth: ".81px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={562.79}
              cy={566.21}
              rx={384.98}
              ry={525.99}
              transform="rotate(-72.51 562.754 566.21)"
              style={{
                strokeWidth: ".78px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={550.75}
              cy={571.15}
              rx={371.64}
              ry={508.61}
              transform="rotate(-72.32 550.73 571.15)"
              style={{
                strokeWidth: ".76px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={538.72}
              cy={576.1}
              rx={358.3}
              ry={491.23}
              transform="rotate(-72.12 538.683 576.088)"
              style={{
                strokeWidth: ".73px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={526.68}
              cy={581.04}
              rx={344.97}
              ry={473.86}
              transform="rotate(-71.9 526.707 581.044)"
              style={{
                strokeWidth: ".71px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={514.65}
              cy={585.98}
              rx={331.64}
              ry={456.5}
              transform="rotate(-71.67 514.674 585.987)"
              style={{
                strokeWidth: ".69px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={502.62}
              cy={590.92}
              rx={318.31}
              ry={439.14}
              transform="rotate(-71.43 502.56 590.908)"
              style={{
                strokeWidth: ".66px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={490.58}
              cy={595.86}
              rx={304.99}
              ry={421.78}
              transform="rotate(-71.16 490.573 595.858)"
              style={{
                strokeWidth: ".64px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={478.55}
              cy={600.8}
              rx={291.67}
              ry={404.44}
              transform="rotate(-70.87 478.58 600.812)"
              style={{
                strokeWidth: ".61px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={466.51}
              cy={605.74}
              rx={278.36}
              ry={387.1}
              transform="rotate(-70.56 466.549 605.756)"
              style={{
                strokeWidth: ".59px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={454.48}
              cy={610.69}
              rx={265.05}
              ry={369.78}
              transform="rotate(-70.23 454.44 610.672)"
              style={{
                strokeWidth: ".56px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={442.44}
              cy={615.63}
              rx={251.75}
              ry={352.47}
              transform="rotate(-69.86 442.446 615.628)"
              style={{
                strokeWidth: ".54px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={430.41}
              cy={620.57}
              rx={238.46}
              ry={335.17}
              transform="rotate(-69.46 430.402 620.561)"
              style={{
                strokeWidth: ".52px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={418.38}
              cy={625.51}
              rx={225.19}
              ry={317.89}
              transform="rotate(-69.02 418.357 625.505)"
              style={{
                strokeWidth: ".49px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={406.34}
              cy={630.45}
              rx={211.92}
              ry={300.62}
              transform="rotate(-68.53 406.374 630.463)"
              style={{
                strokeWidth: ".47px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={394.31}
              cy={635.39}
              rx={198.67}
              ry={283.38}
              transform="rotate(-67.99 394.345 635.406)"
              style={{
                strokeWidth: ".44px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={382.27}
              cy={640.33}
              rx={185.43}
              ry={266.17}
              transform="rotate(-67.39 382.286 640.338)"
              style={{
                strokeWidth: ".42px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={370.24}
              cy={645.28}
              rx={172.22}
              ry={248.99}
              transform="rotate(-66.72 370.186 645.253)"
              style={{
                strokeWidth: ".4px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={358.21}
              cy={650.22}
              rx={159.03}
              ry={231.84}
              transform="rotate(-65.95 358.203 650.219)"
              style={{
                strokeWidth: ".37px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={346.17}
              cy={655.16}
              rx={145.88}
              ry={214.75}
              transform="rotate(-65.08 346.126 655.13)"
              style={{
                strokeWidth: ".35px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={334.14}
              cy={660.1}
              rx={132.78}
              ry={197.72}
              transform="rotate(-64.07 334.116 660.088)"
              style={{
                strokeWidth: ".32px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={322.1}
              cy={665.04}
              rx={119.73}
              ry={180.77}
              transform="rotate(-62.89 322.128 665.062)"
              style={{
                strokeWidth: ".3px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={310.07}
              cy={669.98}
              rx={106.76}
              ry={163.92}
              transform="rotate(-61.5 310.085 669.997)"
              style={{
                strokeWidth: ".27px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
            <ellipse
              cx={298.03}
              cy={674.92}
              rx={93.91}
              ry={147.21}
              transform="rotate(-59.83 298.04 674.932)"
              style={{
                strokeWidth: ".25px",
                fill: "none",
                stroke: "#000",
                strokeMiterlimit: 10,
              }}
            />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-unbounded leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Create your own{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-500">
                virtual space
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Meet colleagues, go to a concert or show off your project
                presentation - with our platform you can do it all right from
                home
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-ow_sky-500 hover:bg-sky-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-ow_black-800 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={HeroImage} width="768" height="432" alt="Hero" />
                <svg className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto" width="768" height="432" viewBox="0 0 768 432" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hero-ill-a">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.24%" id="hero-ill-b">
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="hero-ill-e">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle fillOpacity=".04" fill="url(#hero-ill-a)" cx="384" cy="216" r="128" />
                    <circle fillOpacity=".16" fill="url(#hero-ill-b)" cx="384" cy="216" r="96" />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div> */}

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
