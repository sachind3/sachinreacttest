export default function NextMatchDate({ date }) {
  let utcDate = date.concat(" UTC");
  return (
    <>
      {new Date(utcDate).toLocaleDateString()}{" "}
      {new Date(utcDate).toLocaleTimeString()}{" "}
    </>
  );
}
