"use client";

import Image from "next/image";
import SearchBar from "../SearchBar";
import React from "react";
import { SteakIcon } from "../Icon/SteakIcon";
import { LeafIcon } from "../Icon/LeafIcon";
import { ScaleIcon } from "../Icon/ScaleIcon";
import { Diet, Dino } from "@/utils/types";
import { FilterContext } from "@/context/FilterContext";
import { Egg } from "../Icon/Egg";

export const ResultList = ({ dinoData }: { dinoData: Dino[] }) => {
  const { searchTerm, setSearchTerm, dietFilters } =
    React.useContext(FilterContext);

  const [filteredResults, setFilteredResults] =
    React.useState<Dino[]>(dinoData);

  React.useEffect(() => {
    const filteredDinosaurs = filterDinosaursBySearchTermAndDiet(
      dinoData,
      searchTerm,
      dietFilters
    );
    setFilteredResults(filteredDinosaurs);
  }, [dinoData, searchTerm, dietFilters]);

  return (
    <>
      <div className="lg:col-span-3">
        <SearchBar
          onChange={setSearchTerm}
          placeholder="Search dino..."
          value={searchTerm}
        />
        {filteredResults.length === 0 ? (
          <div className="flex flex-col justify-center items-center my-8">
            <Egg className="w-12 h-12 fill-teal-600 mb-3" />
            <p className="font-semibold text-gray-400">
              No results {searchTerm && `for ${searchTerm}`}
            </p>
            <p className="text-xs text-gray-500">
              Try a different search term or remove filters.
            </p>
          </div>
        ) : (
          <ul role="list" className="divide-y divide-gray-700 lg:col-span-3">
            {filteredResults.map((dino) => (
              <li key={dino.name} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <Image
                    width="50"
                    height="50"
                    className="h-12 w-12 flex-none"
                    src={dino.imageUrl}
                    alt=""
                  />
                  <div>
                    <p className="flex gap-2 items-center text-sm font-semibold leading-6 text-gray-300">
                      {dino.diet === "carnivorous" ? (
                        <SteakIcon className="w-4 h-4 fill-red-400 opacity-60" />
                      ) : (
                        <LeafIcon className="w-4 h-4 fill-green-400 opacity-60" />
                      )}
                      {dino.name}
                    </p>
                    <p className="mt-1 line-clamp-1 text-sm leading-5 text-gray-500">
                      {dino.description}
                    </p>
                    <p className="text-xs mt-3 text-teal-500 border inline-flex py-1 px-2 rounded-md border-teal-900 gap-1 items-center">
                      <ScaleIcon className="w-3 h-3 fill-teal-500" />
                      {dino.weightInKg} KG
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const filterDinosaursBySearchTermAndDiet = (
  dinoData: Dino[],
  searchTerm: string,
  diets: Diet[]
) => {
  const searchTermLower = searchTerm.toLowerCase();

  return dinoData.filter((dino) => {
    const includesSearchTerm = dino.name
      .toLowerCase()
      .includes(searchTermLower);
    const includesDiet = diets.includes(dino.diet);

    return includesSearchTerm && includesDiet;
  });
};
