import fondImg from "@/assets/fond-circularoulette.png";

export default function FondCircularouletteSncf() {
  return (
    <div className="relative size-full" data-name="Fond circularoulette sncf">
      <img
        src={fondImg}
        alt="Fond de la roue CirculaRoulette"
        className="block size-full rounded-full"
        draggable={false}
      />
    </div>
  );
}
