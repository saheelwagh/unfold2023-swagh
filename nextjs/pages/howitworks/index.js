// HowItWorks.js
import React from "react";

const HowItWorks = () => {
  return  (
    <div className="text-center">
      <h1 className="text-4xl font-bold">How It Works</h1>
      <div class="flex space-x-4 mt-4">
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

export default HowItWorks;
