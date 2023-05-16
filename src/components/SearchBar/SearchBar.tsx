import React from "react";

interface SearchBarProps {
  onChange: (searchTerm: string) => void;
  placeholder: string;
  value: string;
}
const SearchBar = ({ onChange, placeholder, value }: SearchBarProps) => {
  return (
    <input
      className="w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-teal-600 outline-none sm:text-md sm:leading-6"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
