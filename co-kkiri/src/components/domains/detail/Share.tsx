import styled from "styled-components";
import { ICONS } from "@/constants/icons";

export default function Share() {
  const handleShare = () => {};

  const { share } = ICONS;

  return (
    <Container onClick={handleShare}>
      <Icon src={share.src} alt={share.alt} />
    </Container>
  );
}

const Container = styled.button`
  width: 4.2rem;
  height: 4.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 2.2rem;
  height: 2.5rem;
`;
