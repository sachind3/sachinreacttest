import NextMatchDate from "./NextMatchDate";

export default function PlayerCard({ player }) {
  return (
    <div className="bg-white p-3 shadow">
      <img src={`./player-images/${player.Id}.jpg`} />
      <div>Name: {player.PFName}</div>
      <div>Skill: {player.SkillDesc}</div>
      <div>Value: ${player.Value}</div>
      <div>
        Upcoming match: {player.UpComingMatchesList[0].CCode} vs{" "}
        {player.UpComingMatchesList[0].VsCCode}
      </div>
      <div>
        Next Match Time :{" "}
        <NextMatchDate date={player.UpComingMatchesList[0].MDate} />
      </div>
    </div>
  );
}
