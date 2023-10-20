// components/CourseList.js

import React from "react";

const courses = [
  {
    id: 1,
    name: "Solidity 101",
    creator: "Web3mantra",
  },
  {
    id: 2,
    name: "Rust and Move for blockchain",
    creator: "Sui Ronaldo",
  },
  {
    id: 3,
    name: "Gaming concepts for blockchain",
    creator: "MakerDao",
  },
];

const CourseList = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Available Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="border p-4 mb-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
            <p className="text-gray-600">Creator: {course.creator}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-2 rounded-full">
              Buy Course
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function handleBuyCourse(course) {
  // Handle the course purchase logic here
  // This function can be extended to initiate the purchase process, mint NFTs, etc.
  console.log(`Buy course: ${course.name}`);
}

export default CourseList;
