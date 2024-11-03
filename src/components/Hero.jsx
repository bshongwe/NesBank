import React from "react";
import Container from "./Container";
import Title from "./Title";
import Image from "next/image";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
import playStore from "@/images/playStore.png";
import ExtraLogos from "./ExtraLogos";
import BackgroundDesign from "./BackgroundDesign";
import PhoneFrame from "./PhoneFrame";
import AppFeature from "./AppFeature";

const Hero = () => {
  return (
    <section id="home" className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          
          {/* Top Left Video */}
          <div className="lg:col-span-5 mb-8">
            <video
              src="/videos/NesBank.mp4"
              autoPlay
              loop
              muted
              className="w-full lg:w-3/4"
              style={{ maxWidth: "400px" }}
            ></video>
          </div>

          {/* Right Side (Text and Buttons) */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-7">
            <Title title="Invest wisely. Invest timely." className="text-4xl" />
            <p className="mt-6 text-lg text-gray-600">
              Time is not money, but investing in time is wisdom. By leveraging
              insights from our network of industry insiders and Hi-Tech tools, you
              will invest and bank at the highest precision.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
              <Image className="w-32 h-auto" src={playStore} alt="Download from Play Store" />
              <Button variant="outline" href="https://youtube.com/watch?v=6wOdJZqzvc0">
                <BsPlayCircle className="text-xl" />
                <span className="ml-2.5">Watch the video</span>
              </Button>
            </div>
          </div>

          {/* Lower Section: YouTube Embed and PhoneFrame */}
          <div className="lg:col-span-12 lg:flex lg:gap-8 lg:mt-10">

            {/* Embedded YouTube Video */}
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/6wOdJZqzvc0"
              title="NesBank app promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

            {/* PhoneFrame with Background Design */}
            <div className="relative mt-10 sm:mt-20 lg:mt-0 lg:w-1/2">
              <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
              <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:h-auto lg:px-0 lg:pt-10">
                <PhoneFrame className="max-w-[366px] mx-auto">
                  <AppFeature />
                </PhoneFrame>
              </div>
            </div>
          </div>

          {/* Extra Logos */}
          <ExtraLogos />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
