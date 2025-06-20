import { useState } from 'react';

import cone0 from '../assets/pink-cone.png';
import cone1 from '../assets/blue-cone.png';
import cone2 from '../assets/brown-cone.png';
import cone3 from '../assets/green-cone.png';
import smallcone0 from '../assets/pink-small.png';
import smallcone1 from '../assets/blue-small.png';
import smallcone2 from '../assets/brown-small.png';
import smallcone3 from '../assets/green-small.png';

const coneOptions = [
  {
    id: 0,
    name: 'Strawberry cone',
    image: cone0,
    radial: 'radial-gradient(80.53% 192.72% at 0% 0%, #BE128D 0%, #FF6CEE 100%)',
  },
  {
    id: 1,
    name: 'Blueberry cone',
    image: cone1,
    radial: 'radial-gradient(80.53% 192.72% at 0% 0%, #236CDA 0%, #47C4F6 100%)',
  },
  {
    id: 2,
    name: 'Chocolate cone',
    image: cone2,
    radial: 'radial-gradient(80.53% 192.72% at 0% 0%, #9C5C3F 0%, #E0BDB0 100%)',
  },
  {
    id: 3,
    name: 'Evergreen cone',
    image: cone3,
    radial: 'radial-gradient(80.53% 192.72% at 0% 0%, #2A9949 0%, #47F66E 100%)',
  },
];

const smallConeOptions = [
  { id: 0, name: 'Strawberry cone', image: smallcone0 },
  { id: 1, name: 'Blueberry cone', image: smallcone1 },
  { id: 2, name: 'Chocolate cone', image: smallcone2 },
  { id: 3, name: 'Evergreen cone', image: smallcone3 },
];

const Hero = () => {
  const [selectedCone, setSelectedCone] = useState(coneOptions[0]);

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 pt-20 sm:pt-28 pb-10 min-h-screen text-white"
      style={{ background: selectedCone.radial }}
    >
      {/* Left content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 md:ml-10 sm:ml-0">
        <h1 className="font-pacifico text-[64px] sm:text-[100px] md:text-[140px] lg:text-[160px] leading-none">
          icecream
        </h1>

        <h2 className="font-poppins text-[36px] sm:text-[48px] md:text-[66px] font-extrabold leading-none">
          {selectedCone.name}
        </h2>

        <p className="font-poppins text-base sm:text-lg font-semibold leading-[140%] px-2 sm:px-0">
          Embark on a culinary journey of delight as you immerse yourself in our
          artisan-crafted ice cream collection—each flavor a story, each scoop
          an unforgettable chapter in your sweet odyssey!
        </p>

        <p className="font-poppins text-base sm:text-lg font-semibold leading-[140%] px-2 sm:px-0">
          Indulge in a world of imagination, where every scoop unveils a new
          taste adventure! Choose your favorite
        </p>

        {/* Small cones row */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-4">
          {smallConeOptions.map((cone) => (
            <button
              key={cone.name}
              onClick={() => setSelectedCone(coneOptions[cone.id])}
              className="p-2 rounded-xl bg-transparent"
            >
              <img
                src={cone.image}
                alt={cone.name}
                className="w-[60px] sm:w-[80px] md:w-[100px] object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right large cone image */}
<div className="relative mt-6 sm:mt-10 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-end">
        <img
  src={selectedCone.image}
  alt={selectedCone.name}
  className="w-[55%] xs:w-[60%] sm:w-[65%] md:w-[400px] lg:w-[500px] xl:w-[580px] max-h-[70vh] object-contain relative -top-1"
/>

      </div>
    </section>
  );
};

export default Hero;
