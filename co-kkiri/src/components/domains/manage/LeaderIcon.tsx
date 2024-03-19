import { ICONS } from "@/constants/icons";
import styled from "styled-components";
import leaderBackground from "@/assets/icons/leader/leader_background.svg";

export default function LeaderIcon() {
  return (
    <Container>
      <img src={ICONS.leaderIcon.src} alt={ICONS.leaderIcon.alt} />
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${leaderBackground});
  position: relative;
  width: 1.8rem;
  height: 1.8rem;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
