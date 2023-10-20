import React from "react";

import Link from "next/link";
import Navbar from "./navbar/navbar";
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
    <div className="bg-gradient-to-r flex-col from-blue-400 to-purple-600 min-h-screen flex items-center relative">
      
      <div className="container mx-auto text-center p-8">
        <h1 className="text-4xl text-white font-semibold">Welcome to KnowledgePool</h1>
        <p className="text-lg text-gray-300 mt-4">
          Where your favourite educators pool their knowledge
        </p>
        
      </div>
    <HowItWorks/>

      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L120,154.7C240,149,480,139,720,144C960,149,1200,171,1320,181.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
    </div>
  );
};
const HowItWorks = () => {
  return  (
    <div className="text-center">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <div class="flex-col space-x-4 mt-4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-semibold">1</div>
          <div class="ml-4">Buy a listed book or course from your favorite creator.</div>
        </div>

        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-semibold">2</div>
          <div class="ml-4">Receive NFT.</div>
        </div>
      </div>

      <div class="flex space-x-4 mt-4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-semibold">3</div>
          <div class="ml-4">Utilize the NFT for gaining access to dedicated support chats, unlock 1v1 calls with the founder.</div>
        </div>

        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-semibold">4</div>
          <div class="ml-4">Secure a discount on future products by your favorite creator or their allies.</div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
