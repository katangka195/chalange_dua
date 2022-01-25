import React, { useState } from "react";
import Slidemage from "./Slideimage";
import { useRecoilState } from "recoil";
import counterAtom, { Harga, Jumlah, Logic, List } from "../../recoil/counter/atoms";

export default function Collections() {
  const [value, setValue] = useRecoilState(counterAtom);
  const [harga] = useRecoilState(Harga);
  const [jumlah, setJumlah] = useRecoilState(Jumlah);
  const [logic, SetLogic] = useRecoilState(Logic);
  const [list] = useRecoilState(List);

  const clickHandelerminus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const clickHandelersum = () => {
    setValue(value + 1);
  };

  const addTocard = function () {
    SetLogic(true);
    setJumlah(harga * value);
  };

  return (
    <div className="container mx-auto ">
      {/* <div>{harga}</div> */}
      {/* <div>{logicnya.nilai}</div> */}
      <div className="grid grid-cols-1 md:flex md: space-x-4">
        <div className="md:w-1/2 block">
          <Slidemage />
        </div>
        <div className="md:w-1/2 block md:mt-10 leading-normal mt-[460px] pl-5 sm:pl-0 pr-10 container ">
          <div className="text-orange-400 uppercase text-sm font-semibold ">{list.judul}</div>
          <h1 className="text-2xl font-bold mt-3">
            {list.title} <br /> Sneakers
          </h1>
          <p className="mt-5 text-gray-400">
            These low-profile sneakers are you perfect casual wear <br /> companion. Featuring a durable rubber auter sole, the'll <br /> witstand everything the weather can offer
          </p>
          <div className="flex items-center sm:items-baseline mt-5  ">
            <div>
              <div className="mr-3 text-2xl font-semibold ">$125.00</div>
              <div className="mr-8 line-through text-gray-400 hidden sm:block ">$250.00</div>
            </div>

            <div className="flex sm:block w-full justify-between  ">
              <div className="bg-gray-100 sm:bg-white px-2 rounded  text-orange-600">50%</div>
              <div className="mr-8 line-through text-gray-400 block sm:hidden ">$250.00</div>
            </div>
          </div>
          <div className="sm:flex justify-center mx-auto relative sm:justify-start items-center grid justify-items-center  mt-7 sm:space-x-4 ">
            {/* tombol counter */}
            <div className="  items-center flex w-80 rounded  bg-gray-100 justify-between font-bold p-0.5  pb-1  ">
              <button onClick={clickHandelerminus} className=" text-orange-500 text-3xl hover:opacity-50 ">
                -
              </button>
              <p>{value}</p>
              <button onClick={clickHandelersum} className="text-orange-500 text-3xl hover:opacity-50">
                +
              </button>
            </div>
            {/* tombol mark */}
            <div onClick={addTocard} className="flex space-x-2 cursor-pointer items-center py-2 rounded text-white font-semibold w-80 justify-center mt-5 sm:mt-0 bg-orange-500 hover:opacity-80">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
