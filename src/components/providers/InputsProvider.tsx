"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type InputsContextType = {
  inputs: string[];
  setInputs: (inputs: string[]) => void;
};
const InputsContext = createContext<InputsContextType>({
  inputs: [],
  setInputs: () => {},
});

type Props = {
  children: ReactNode;
};
export const InputsProvider = ({ children }: Props) => {
  const [inputs, setInputs] = useState<string[]>([]);
  return (
    <InputsContext.Provider value={{ inputs, setInputs }}>
      {children}
    </InputsContext.Provider>
  );
};

export const useInputs = () => {
  return useContext(InputsContext);
};
