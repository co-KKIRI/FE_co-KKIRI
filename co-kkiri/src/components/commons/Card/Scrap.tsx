import styled from "styled-components";
import { ICONS } from "@/constants/icons";

//임시
interface ScrapProps {
  scrap: boolean;
  size: number;
}

export default function Scrap({ scrap, size }: ScrapProps) {
  const scrapIcon = scrap ? ICONS.scrapFull : ICONS.scrapEmpty;

  return (
    <Wrapper $size={size}>
      <img src={scrapIcon.src} alt={scrapIcon.alt} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}rem;
  img {
    width: 100%;
  }
`;
