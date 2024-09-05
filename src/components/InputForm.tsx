"use client";
import { useState } from "react";
import { useInputs } from "./providers/InputsProvider";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function InputForm() {
  const { inputs, setInputs } = useInputs();
  const [newInput, setNewInput] = useState("");
  const handleSubmit = () => {
    // if (inputs.includes(newInput)) {
    //   alert("This input already exists.");
    // } else {
    setInputs([...inputs, newInput]);
    // }
  };
  return (
    <div className="flex gap-3 items-center justify-center  h-full">
      <Input
        className="w-40"
        type="string"
        value={newInput}
        onChange={(event) => {
          setNewInput(event.target.value);
        }}
      />
      <Button onClick={handleSubmit} type="submit">
        Add input
      </Button>
    </div>
  );
}
