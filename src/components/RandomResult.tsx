"use client";

import { useState } from "react";
import { useInputs } from "./providers/InputsProvider";
import { Button } from "./ui/button"; // Assuming you have a button component from shadcn/ui

export default function RandomResult() {
  const { inputs } = useInputs();
  const [randomValue, setRandomValue] = useState<string | null>(null);

  const handleGetRandomValue = () => {
    if (inputs.length > 0) {
      const randomIndex = Math.floor(Math.random() * inputs.length);
      setRandomValue(inputs[randomIndex]);
    } else {
      setRandomValue(null); // Clear the result if no inputs exist
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full gap-8 p-6 rounded-lg shadow-md ">
      <Button
        className="px-8 py-4 text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  transition-transform duration-300 ease-in-out transform hover:scale-110 shadow-lg rounded-full  animate-bounce"
        onClick={handleGetRandomValue}
      >
        🎲 Get Random Value 🎲
      </Button>
      {randomValue && (
        <div className="text-4xl font-extrabold text-white animate-pulse">
          🎉 <span className="text-yellow-500">{randomValue}</span> 🎉
        </div>
      )}
    </div>
  );
}
