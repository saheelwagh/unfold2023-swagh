// pages/index.js

import Link from 'next/link'; // Import the Link component from Next.js
import Head from 'next/head';
// import { StrictMode, useState } from "react";
// import { createRoot } from "react-dom/client";
// import { WalletProvider, useSuiProvider } from "@suiet/wallet-kit";

// const ConnectWalletButton = () => {
//   const [isWalletConnected, setIsWalletConnected] = useState(false);
//   const { connectWallet } = useSuiProivder();

//   const handleConnectWallet = async () => {
//     const wallet = await connectWallet();

//     if (wallet) {
//       setIsWalletConnected(true);
//     }
//   };
// }
const items = [
  {
    item_name: 'Item 1',
    price: '$19.99',
    image: '/placeholder-image-1.jpg',
    productLink: '/product/item1', // Replace with the actual product details page link
  },
  {
    item_name: 'Item 2',
    price: '$29.99',
    image: '/placeholder-image-2.jpg',
    productLink: '/product/item2', // Replace with the actual product details page link
  },
  {
    item_name: 'Item 3',
    price: '$39.99',
    image: '/placeholder-image-2.jpg',
    productLink: '/product/item2', // Replace with the actual product details page link
  },
  // Add more items here
];

const HomePage = () => {
  return (
    <div>
      <nav className=" p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">Suiroad</h1>
            <Link href="/login">
              <div className="bg-orange-500 text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300 hover:bg-orange-500 hover:text-white">
                Log In
              </div>
            </Link>
          </div>
        </nav>
    <div className="bg-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
      
      <header>
        
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Suiroad</h1>
        <p className="text-lg mb-6">Your one-stop shop for all things e-commerce!</p>
        <a
          href="/shop" // Replace with the actual link to your shop page
          className="bg-white text-blue-500 py-2 px-4 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-500 hover:text-white"
        >
          Start Shopping
        </a>
      </header>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, index) => (
            <Link href={item.productLink} key={index}>
              <div className="bg-white p-4 rounded-lg cursor-pointer">
                <img
                  src={item.image}
                  alt={item.item_name}
                  className="w-full h-32 object-cover object-center mb-2"
                />
                <h3 className="text-lg text-gray-900 font-semibold">{item.item_name}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default HomePage;
