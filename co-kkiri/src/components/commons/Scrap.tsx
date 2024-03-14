import styled from "styled-components";
import { ICONS } from "@/constants/icons";
import { useToggle } from "usehooks-ts";

//임시
interface ScrapProps {
  wasScraped?: boolean;
  width?: number;
  onClick?: () => void;
}

/**
 *
 * @property width - px단위
 * */
export default function Scrap({ wasScraped = false, width }: ScrapProps) {
  const [isScraped, toggle] = useToggle(wasScraped);
  const scrapIcon = isScraped ? ICONS.scrapFull : ICONS.scrapEmpty;

  const handleScrapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  };

  return (
    <Wrapper $width={width} onClick={handleScrapClick}>
      <ScrapIcon src={scrapIcon.src} alt={scrapIcon.alt} />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width / 10}rem` : "100%")};
  cursor: pointer;
`;

const ScrapIcon = styled.img`
  width: 100%;
`;
