import { useNavigate } from "react-router-dom";
import { useToggle } from "usehooks-ts";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { CARD_CORNER_BUTTON, CardCornerButtonType } from "@/constants/cardCornerButton";

//임시
interface CardCornerButtonProps {
  cardCornerType?: CardCornerButtonType;
  isScraped?: boolean;
  postId?: number;
  width?: number;
  className?: string;
}

/**
 *
 * @property width - px단위
 * */
export default function CardCornerButton({
  cardCornerType = "scrap",
  isScraped = false,
  postId,
  className,
}: CardCornerButtonProps) {
  const navigate = useNavigate();
  const [isScrapedValue, toggle] = useToggle(isScraped);
  const { text, icon, width, onClick } = CARD_CORNER_BUTTON[cardCornerType as CardCornerButtonType];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (cardCornerType === "scrap") {
      onClick({ isScraped: isScrapedValue, toggle });
    } else if (cardCornerType === "manage" || (cardCornerType === "write" && postId)) {
      onClick({ postId, navigate });
    }
  };

  return (
    <Wrapper onClick={handleClick} className={className} $cardCornerType={cardCornerType}>
      {text && <Text $cardCornerType={cardCornerType}>{text}</Text>}
      <Icon src={icon(isScrapedValue).src} alt={icon(isScrapedValue).alt} $width={width} />
    </Wrapper>
  );
}

const {
  color,
  typography: { font12Bold },
} = DESIGN_TOKEN;

const Wrapper = styled.div<{ $cardCornerType: CardCornerButtonType | null }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  ${({ $cardCornerType }) =>
    $cardCornerType === "write" || $cardCornerType === "view" ? `padding-top:0.5rem; padding-bottom: 1.5rem;` : ""};
`;

const Text = styled.span<{ $cardCornerType: CardCornerButtonType | null }>`
  ${font12Bold}
  color: ${({ $cardCornerType }) => ($cardCornerType === "write" ? `${color.primary[1]}` : `${color.gray[1]}`)};
`;

const Icon = styled.img<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width / 10}rem` : "100%")};
`;
