import { ICONS } from "@/constants/icons";

export default function ShareButton() {
  const handleShare = () => {};

  const { share } = ICONS;

  return (
    <button onClick={handleShare}>
      <img src={share.src} alt={share.alt} width={22} height={25} />
    </button>
  );
}
