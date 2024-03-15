import { useNavigate } from "react-router-dom";
import { ICONS } from "@/constants/icons";

export default function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { backspace } = ICONS;

  return (
    <button onClick={handleGoBack}>
      <img src={backspace.src} alt={backspace.alt} width={20} height={20} />
    </button>
  );
}
