import React from 'react';
import { useState } from 'react';

const ImageIndividual = ({ person1, person2, name, title }) => {
  const [hoverImage, setHoverImage] = useState(false);
  return (
    <div className="max-w-xs bg-white  rounded-lg shadow-md">
      <img
        className={hoverImage ? 'rounded-lg' : 'hidden rounded-lg'}
        src={person2}
        alt="Organizer 1"
        onMouseLeave={() => setHoverImage(false)}
      />
      <img
        className={hoverImage ? 'hidden rounded-lg' : 'rounded-lg'}
        src={person1}
        alt="Organizer 2"
        onMouseEnter={() => setHoverImage(true)}
      />
      <div className="font-bold text-xl mt-2 ml-3 text-application-color">
        {name}
      </div>
      <p className="text-base mb-2 ml-3 text-application-color">{title}</p>
    </div>
  );
};

export default ImageIndividual;
