import { useNavigate } from "react-router-dom";
import { useToggle } from "usehooks-ts";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { CARD_CORNER_BUTTON, CardCornerButtonType } from "@/constants/cardCornerButton";

//임시
interface CardCornerButtonProps {
  cardCornerType?: CardCornerButtonType;
  isScrapped?: boolean;
  postId?: number;
  width?: number;
  className?: string;
}

/**
 * CardCornerButton 컴포넌트는 카드 모서리에 위치하는 버튼(스크랩, 관리, 리뷰 작성, 리뷰 보기)을 표시합니다.
 *
 * @param {CardCornerButtonType} cardCornerType - 버튼의 타입을 결정합니다. ("scrap", "manage", "write", "view" 중 하나)
 * 각 타입의 icon 이미지, width, text, onClick은 CARD_CORNER_BUTTON객체에서 관리합니다.
 * @param {boolean} isScrapped - 스크랩 버튼의 경우, 현재 스크랩이 되어있는지 여부를 나타냅니다.
 * @param {number} [postId] - 관리, 리뷰 작성 버튼의 경우, 해당 포스트의 ID입니다.
 *
 * @example
 * <CardCornerButton cardCornerType="scrap" isScrapped={true} />
 * <CardCornerButton cardCornerType="manage" postId={123} />
 */
export default function CardCornerButton({
  cardCornerType = "scrap",
  isScrapped = false,
  postId,
  className,
}: CardCornerButtonProps) {
  const navigate = useNavigate();
  const [isScrappedValue, toggle] = useToggle(isScrapped);
  const { text, icon, width, onClick } = CARD_CORNER_BUTTON[cardCornerType as CardCornerButtonType];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (cardCornerType === "scrap") {
      onClick({ isScrapped: isScrappedValue, toggle });
    } else if (cardCornerType === "manage" || (cardCornerType === "write" && postId)) {
      onClick({ postId, navigate });
    }
  };

  return (
    <Wrapper onClick={handleClick} className={className} $cardCornerType={cardCornerType}>
      {text && <Text $cardCornerType={cardCornerType}>{text}</Text>}
      <Icon src={icon(isScrappedValue).src} alt={icon(isScrappedValue).alt} $width={width} />
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
