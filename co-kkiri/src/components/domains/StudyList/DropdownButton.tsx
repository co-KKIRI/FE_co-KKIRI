import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";

export default function DropdownButton() {
  return (
    <Container>
      <div>조회순</div>
      <img src={ICONS.triangle.src} alt={ICONS.triangle.alt} />
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  & div {
    ${typography.font14Semibold}
    color : ${color.black[3]}
  }

  & img {
    width: 1.6rem;
  }
`;
