import styled from "styled-components";
import { ICONS } from "@/constants/icons";

//임시
interface ScrapProps {
  isScraped?: boolean;
  width?: number;
}

/**
 *
 * @property width - px단위
 * */
export default function Scrap({ isScraped = false, width }: ScrapProps) {
  const scrapIcon = isScraped ? ICONS.scrapFull : ICONS.scrapEmpty;

  return <ScrapIcon src={scrapIcon.src} alt={scrapIcon.alt} $width={width} />;
}

const ScrapIcon = styled.img<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width / 10}rem` : "100%")};
`;
