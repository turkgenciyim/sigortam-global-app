import Image from "next/image";
import React from "react";

const Partners = () => {
  const Partners = [
    "ak-sigorta.svg",
    "allianz-sigorta.svg",
    "anadolu-hayat.png",
    "axa-sigorta.png",
    "gulf-sigorta.png",
    "mapfre-sigorta.png",
    "neova-sigorta.svg",
    "sompo-sigorta.svg",
    "zurich-sigorta.png",
  ];
  return (
    <div className="relative mx-auto w-11/12 p-12 mb-12 overflow-hidden rounded-xl bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(350px*10)] gap-20">
        {Partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex w-[200px] items-center justify-center rounded-xl h-24"
          >
            <Image
              src={`/assets/partners/${partner}`}
              alt={partner}
              width={500}
              height={500}
            />
          </div>
        ))}
         {Partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex w-[200px] items-center justify-center rounded-xl h-24"
          >
            <Image
              src={`/assets/partners/${partner}`}
              alt={partner}
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
