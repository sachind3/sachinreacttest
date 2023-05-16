import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

export default function SearchBar() {
  const { q, setQ } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search by Name or Team..."
        className="bg-white py-2 px-3 border outline-none"
      />
    </div>
  );
}
