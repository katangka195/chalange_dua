import React from "react";
import Slidemage from "./Slideimage";

export default function Collections() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:flex">
        <div className="md:w-1/2 block">
          <Slidemage />
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
