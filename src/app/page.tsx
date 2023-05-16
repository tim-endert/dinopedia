import { FilterSection } from "@/components/FilterSection/FilterSection";
import { ResultList } from "@/components/ResultList/ResultList";
import SearchBar from "@/components/SearchBar/SearchBar";
import { FilterContext, FilterProvider } from "@/context/FilterContext";
import { Dino } from "@/utils/types";
import React from "react";

export default async function Home() {
  const data: Dino[] = await getData();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-4xl font-bold tracking-tight text-teal-500">
        DinoPedia
      </h1>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <FilterProvider>
          <FilterSection />
          <ResultList dinoData={data} />
        </FilterProvider>
      </div>
    </main>
  );
}

async function getData() {
  const response = await fetch("http://localhost:3001/api/dinos");

  if (!response.ok) {
    throw new Error("Failed to fetch dino data");
  }

  const data = await response.json();

  return data;
}
