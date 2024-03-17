import { useNavigate } from "react-router-dom";
import { ICONS } from "@/constants/icons";
import styled from "styled-components";

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { backspace } = ICONS;

  return (
    <Container className={className} onClick={handleGoBack}>
      <img src={backspace.src} alt={backspace.alt} />
    </Container>
  );
}

const Container = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
