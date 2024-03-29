import React from 'react';
import pill1 from '../assets/pill1.webp';
import pill2 from '../assets/pill2.webp';
import pill3 from '../assets/pill3.webp';

const Hero = () => {
  return (
    <section>
      <div className="bg-application-color text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center my-12 lg:my-24 pt-3">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 px-5">
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl pt-3 pb-3 tracking-loose text-text-application-color">
              Welcome!
            </h1>
            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed xl:leading-snug mb-4 ">
              Erindale Badminton
            </h2>
            <p className="text-xl lg:text-base text-gray-50 mb-4 text-justify">
              Erindale Badminton Club is a 50-year strong non-profit badminton
              club for adults 18 years of age and older. The mission of Erindale
              Badminton Club is to offer venues where members and their
              registered guests are afforded an opportunity to play badminton,
              get exercise and socialize in a respectful and hospitable
              environment.
            </p>
            <div className="mt-4 z-10">
              <a
                href="#Locations"
                className="bg-transparent hover:bg-text-application-color text-text-application-color hover:text-black rounded shadow hover:shadow-lg py-2 px-2 sm:px-4 border border-text-application-color hover:border-transparent"
              >
                Locations
              </a>
              <a
                href="#Pricing"
                className="bg-transparent hover:bg-text-application-color text-text-application-color hover:text-black rounded shadow hover:shadow-lg py-2 px-2 sm:px-6 border border-text-application-color hover:border-transparent ml-4"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="p-11 mt-8 mb-6 lg:p-8 lg:mb-2 lg:mt-0 ml-0 lg:w-2/3 lg:ml-20 justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img
                  className="mt-28 hidden xl:block"
                  src={pill3}
                  alt="Badminton Image 1"
                />
              </div>
              <div>
                <img
                  className="inline-block mt-24 lg:mt-0 p-8 lg:p-0"
                  src={pill2}
                  alt="Badminton Image 2"
                />
              </div>
              <div>
                <img
                  className="mt-28 hidden lg:block"
                  src={pill1}
                  alt="Badminton Image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
