import { useState } from "react";

type SearchbarProps = {
  searchHandler: (text: string) => void;
};
const Searchbar = ({ searchHandler }: SearchbarProps) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <input
        className="dark:bg-slate-600 dark:bg-slate-700 focus:outline-sky-500 bg-slate-50 p-2 py-3 w-full rounded-lg"
        type="text"
        name="searchbox"
        id="searchbox"
        placeholder="Search"
        onChange={(e) => searchHandler(e.currentTarget.value)}
      />
      <button className=" bg-sky-100 dark:bg-slate-500 text-sky-500 font-semibold rounded-lg px-4 py-3 self-end hover:bg-sky-500 hover:text-white">
        <i className="text-xl fa-solid fa-magnifying-glass " />
      </button>
    </div>
  );
};

export default Searchbar;
