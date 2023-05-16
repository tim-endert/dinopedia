"use client";

import { Diet } from "@/utils/types";
import React from "react";

interface FilterContextProps {
  dietFilters: Diet[];
  setDietFilters: React.Dispatch<React.SetStateAction<Diet[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = React.createContext({} as FilterContextProps);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [dietFilters, setDietFilters] = React.useState<Diet[]>([
    "carnivorous",
    "herbivorous",
  ]);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <FilterContext.Provider
      value={{ dietFilters, setDietFilters, searchTerm, setSearchTerm }}
    >
      {children}
    </FilterContext.Provider>
  );
};
