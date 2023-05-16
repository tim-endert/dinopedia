"use client";

import { FilterContext } from "@/context/FilterContext";
import { Diet } from "@/utils/types";
import React from "react";

export const FilterSection = () => {
  const { dietFilters, setDietFilters } = React.useContext(FilterContext);

  const toggleDiet = (diet: Diet) => {
    if (dietFilters.includes(diet)) {
      dietFilters.splice(dietFilters.indexOf(diet), 1);
      setDietFilters(dietFilters.filter((item) => item !== diet));
    } else {
      setDietFilters([...dietFilters, diet]);
    }
  };

  return (
    <div className="hidden lg:block">
      <p className="font-bold my-4">Diet</p>
      <div className="flex items-center">
        <input
          name="diet"
          defaultValue="carnivorous"
          type="checkbox"
          defaultChecked={dietFilters.includes("carnivorous")}
          onChange={() => toggleDiet("carnivorous")}
          className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-teal-600 focus:ring-teal-500"
        />
        <label className="ml-3 text-sm">Fleischfresser</label>
      </div>
      <div className="flex items-center">
        <input
          name="diet"
          defaultValue="herbivorous"
          type="checkbox"
          defaultChecked={dietFilters.includes("herbivorous")}
          onChange={() => toggleDiet("herbivorous")}
          className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-teal-600 focus:ring-teal-500"
        />
        <label className="ml-3 text-sm">Pflanzenfresser</label>
      </div>
    </div>
  );
};
