"use client";
import { useSearchParams } from "next/navigation";

export const SearchBox = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "All";

  return (
    <form action="/search" method="GET">
      <div className="border border-grayHoverColor rounded-lg">
        <select
          name="category"
          defaultValue={category}
          className="bg-grayBgColor p-4 rounded-lg"
        >
          <option value="all">All</option>
        </select>
        <input
          className="bg-grayBgColor w-48 p-4 rounded-lg outline-grayHoverColor"
          placeholder="Search"
          defaultValue={q}
          name="q"
        />
        <button className="bg-grayBgColor p-4 rounded-lg">Search</button>
      </div>
    </form>
  );
};
