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
        placeholder="Search..."
      />
    </div>
  );
}
