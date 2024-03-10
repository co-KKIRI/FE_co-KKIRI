import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

//임시
interface CountProps {
  icon: { src: string; alt: string };
  count: number;
}

export default function Count({ icon, count }: CountProps) {
  return (
    <Wrapper>
      <img src={icon.src} alt={icon.alt} />
      <span>{count}</span>
    </Wrapper>
  );
}

const {
  color,
  typography: { font12Semibold },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  img {
    width: 2.4rem;
  }

  span {
    ${font12Semibold};
    color: ${color.gray[1]};
  }
`;
