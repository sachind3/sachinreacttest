import NextMatchDate from "./NextMatchDate";
import { motion } from "framer-motion";

export default function PlayerCard({ player, i }) {
  const defaultImg = (e) => {
    e.target.src = "./player-images/404.jpg";
  };
  return (
    <motion.div
      className="bg-white/50 backdrop-blur p-3 border border-slate-200 rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.05, delay: i * 0.05 }}
    >
      <div className="aspect-square mb-4">
        <img
          onError={defaultImg}
          src={`./player-images/${player.Id}.jpg`}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 xl:gap-3">
        <div className="font-semibold text-base lg:text-xl ">
          {player.PFName}
        </div>
        <div className="w-full text-sm xl:text-base">
          <div className="flex justify-between w-full">
            <span>Skill:</span> <span>{player.SkillDesc}</span>
          </div>
          <div className="flex justify-between">
            <span>Value:</span>
            <span className="text-rose-600 font-semibold text-base xl:text-lg">
              ${player.Value}
            </span>
          </div>
        </div>
        {player.UpComingMatchesList[0]?.CCode && (
          <div className="w-full text-sm xl:text-base text-center">
            Upcoming match:{" "}
            <span className="font-semibold">
              {player.UpComingMatchesList[0].CCode}
            </span>{" "}
            vs{" "}
            <span className="font-semibold">
              {player.UpComingMatchesList[0].VsCCode}
            </span>{" "}
            on <NextMatchDate date={player.UpComingMatchesList[0].MDate} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
