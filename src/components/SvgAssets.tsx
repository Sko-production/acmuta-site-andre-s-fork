import React from "react";
import Image from "next/image";

const svgAssets = [
  {
    src: "/assets/blue-spotlight.svg",
    alt: "UFO",
    top: "21vh",
    left: "20vw",
    width: 280,
    height: 280,
    z: 0,
  },

  {
    src: "/assets/ufo.svg",
    alt: "UFO",
    top: "4vh",
    left: "20vw",
    width: 280,
    height: 280,
    z: 0,
  },
  {
    src: "/assets/rocket.svg",
    alt: "UFO",
    top: "68vh",
    left: "30vw",
    width: 300,
    height: 300,
    z: 11,
  },
  {
    src: "/assets/flame.svg",
    alt: "UFO",
    top: "81vh",
    left: "26vw",
    width: 263,
    height: 263,
    z: 0,
  },
  {
    src: "/assets/spacestation.svg",
    alt: "Space Station",
    top: "161vh",
    left: "80vw",
    width: 310,
    height: 310,
    z: 30,
  },
];
const SvgAssets: React.FC = () => {
  return (
    <>
      {svgAssets.map((asset, index) => (
        <div
          key={index}
          className="absolute z-0"
          style={{ top: asset.top, left: asset.left, zIndex: asset.z }}
        >
          <Image
            src={asset.src}
            alt={asset.alt}
            width={asset.width}
            height={asset.height}
          />
        </div>
      ))}
    </>
  );
};

export default SvgAssets;
