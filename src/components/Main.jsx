import { useContext } from "react";
import { AppContext } from "../context/Context";
import PlayerCard from "./PlayerCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerDirection: -1,
    },
  },
};
export default function Main() {
  const { players, q } = useContext(AppContext);
  return (
    <section className="py-3" initial="hidden" animate="visible">
      <div className="container mx-auto px-4 relative z-10">
        {players.length > 0 ? (
          <div className="grid gap-2 xl:gap-4 lg:gap-3 grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {players.map((player, i) => {
              return <PlayerCard key={player.Id} player={player} i={i} />;
            })}
          </div>
        ) : (
          <div className="bg-white/50 backdrop-blur p-3 border border-slate-200 rounded-md">
            "{q}" not found
          </div>
        )}
      </div>
      <div className="gradient"></div>
    </section>
  );
}
