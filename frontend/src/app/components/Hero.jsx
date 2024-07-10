"use client"
import React from 'react';
import { Button } from "@nextui-org/react";
import Image from 'next/image';
function Hero() {
  return (
    <>
    <div className="relative flex h-screen w-full">
    <img
      className="absolute w-screen h-screen object-cover rounded-md z-10"
      src="/background.jpg"
      alt="image not loaded"
    />
    <div className="absolute inset-0 bg-black opacity-40 z-20"></div>
    <div className="relative flex flex-col space-y-24 px-8 md:px-24 z-30 min-h-[600px] h-full py-8 md:py-16 items-center justify-center">
      <div className='flex flex-col space-y-12'>
        <h1 className="flex flex-wrap fade-out text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide text-white items-center justify-center whitespace-nowrap">
          <span className="text-blue-400">Ecommerce</span>
          <span className="text-cyan-400 ml-2"> Shop</span>
        </h1>
        <p className="text-center fade-out2 text-[14px] sm:text-xl text-slate-300 leading-7 font-cambria">
          YCS is a team of experienced Chartered Accountants and Company Secretaries specializing in IT ACT and GST queries. We offer free consultancy to ensure our clients receive the best advice, with a mission to provide reliable and comprehensive information for all professional needs.
        </p>
      </div>
      <div className="py-4 flex">
        <button
          className="flex items-center justify-center animate-bounce bg-purple-600 py-4 px-8 rounded-full text-white outline-0"
          onClick={() => window.open("https://wa.me/message/6WMAPWPWJUUBE1")}
        >
          Start Shopping
        </button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Hero;
