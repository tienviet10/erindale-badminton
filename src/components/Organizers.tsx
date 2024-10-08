import React from "react";
import andrew1 from "../assets/andrew1.webp";
import andrew2 from "../assets/andrew2.webp";
import michael1 from "../assets/michael1.webp";
import michael2 from "../assets/michael2.webp";
import sara1 from "../assets/sara1.webp";
import sara2 from "../assets/sara2.webp";
import freddy1 from "../assets/freddy1.webp";
import freddy2 from "../assets/freddy2.webp";
import Kevin1 from "../assets/Kevin1.webp";
import Kevin2 from "../assets/Kevin2.webp";
import ImageIndividual from "./ImageIndividual";

const namePositionMap1 = {
  "Sara Gautier": ["President", sara1, sara2],
  "Michael Ho": ["Vice President", michael1, michael2],
};

const namePositionMap2 = {
  "Andrew Lye": ["Equipment Manager", andrew1, andrew2],
  "Kevin Fok": ["Treasurer", Kevin1, Kevin2],
  "Freddy Goh": ["Secretary", freddy1, freddy2],
};

const Organizers = () => {
  return (
    <div className="bg-gray-100 flex justify-center w-full " id="Organizer">
      <section className="w-[90%] px-4 mx-auto space-y-10 lg:space-y-24 lg:px-6 py-40">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-application-color">
          Executive Committee
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-10 md:space-y-0 md:space-x-5 lg:space-x-10">
          {Object.keys(namePositionMap1).map((name) => {
            return (
              <ImageIndividual
                key={name}
                person1={namePositionMap1[name][1]}
                person2={namePositionMap1[name][2]}
                name={name}
                title={namePositionMap1[name][0]}
              />
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 space-x-0 md:space-x-5 l lg:space-x-10 mt-10 lg:mt-0">
          {Object.keys(namePositionMap2).map((name) => {
            return (
              <ImageIndividual
                key={name}
                person1={namePositionMap2[name][1]}
                person2={namePositionMap2[name][2]}
                name={name}
                title={namePositionMap2[name][0]}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Organizers;
