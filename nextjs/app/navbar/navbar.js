import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
        Creator Login
      </button>
      <div className="text-xl font-semibold text-gray-800">KnowledgePool</div>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
