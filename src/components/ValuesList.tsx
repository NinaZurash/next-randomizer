"use client";

import { useInputs } from "./providers/InputsProvider";
import { X } from "lucide-react"; // Import X icon from Lucide React

export default function ValuesList() {
  const { inputs, setInputs } = useInputs();

  const handleRemove = (index: number) => {
    const newInputs = inputs.filter((_, i) => i !== index);
    setInputs(newInputs); // Remove the selected input from the list
  };

  return (
    <div className="w-full h-[1000px] overflow-y-auto">
      {inputs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {inputs.map((input, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white rounded-lg shadow-md p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg text-gray-800 truncate">{input}</span>
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label="Remove"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center items-center flex h-full justify-center text-gray-500">
          <span>No inputs added yet.</span>
        </div>
      )}
    </div>
  );
}
