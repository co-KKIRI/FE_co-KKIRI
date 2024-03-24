import { useNavigate } from "react-router-dom";
import { useToggle } from "usehooks-ts";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { CARD_CORNER_BUTTON, CardCornerButtonType } from "@/constants/cardCornerButton";

//임시
interface CardCornerButtonProps {
  type?: string;
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
  type = "scrap",
  isScraped = false,
  postId,
  className,
}: CardCornerButtonProps) {
  const navigate = useNavigate();
  const [isScrapedValue, toggle] = useToggle(isScraped);
  const { text, icon, width, onClick } = CARD_CORNER_BUTTON[type as CardCornerButtonType];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (type === "scrap") {
      onClick({ isScraped: isScrapedValue, toggle });
    } else if (type === "manage" || (type === "write" && postId)) {
      onClick({ postId, navigate });
    }
  };

  return (
    <Wrapper onClick={handleClick} className={className}>
      {text && <Text $type={type}>{text}</Text>}
      <Icon src={icon(isScrapedValue).src} alt={icon(isScrapedValue).alt} $width={width} />
    </Wrapper>
  );
}

const {
  color,
  typography: { font12Bold },
} = DESIGN_TOKEN;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Text = styled.span<{ $type: string }>`
  ${font12Bold}
  color: ${({ $type }) => ($type === "write" ? `${color.primary[1]}` : `${color.gray[1]}`)};
`;

const Icon = styled.img<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width / 10}rem` : "100%")};
`;
