import React from "react";
import Slideimage from "../Slideimage/Slideimage";
export default function Collections() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:flex">
        <div className="md:w-1/2 block">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab, dignissimos veritatis atque deleniti rem vero suscipit id eius neque sapiente, voluptate aliquid impedit blanditiis accusantium? Laudantium explicabo
            libero minima!
          </h1>
          <Slideimage />
        </div>
        <div className="md:w-1/2 block mt-10 md:mt-0">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptate ut expedita, magni in animi consequuntur eum repudiandae fuga voluptas suscipit illo voluptatibus enim dolor dignissimos dolorum libero porro?
          </h1>
        </div>
      </div>
    </div>
  );
}
