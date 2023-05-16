import { useContext } from "react";
import { AppContext } from "../context/Context";
import PlayerCard from "./PlayerCard";
import SearchBar from "./SearchBar";

export default function Main() {
  const { players } = useContext(AppContext);
  return (
    <section className="py-3">
      <div className="container mx-auto px-4">
        <SearchBar players={players} />
        {players.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {players.map((player) => {
              return <PlayerCard key={player.Id} player={player} />;
            })}
          </div>
        ) : (
          "player not found"
        )}
      </div>
    </section>
  );
}
