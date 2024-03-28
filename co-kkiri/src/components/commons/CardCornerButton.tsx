import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToggle } from "usehooks-ts";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { CARD_CORNER_BUTTON, CardCornerButtonType } from "@/constants/cardCornerButton";
import { scrapAdd, scrapCancel } from "@/lib/api/scrap";

interface CardCornerButtonProps {
  cardCornerType?: CardCornerButtonType;
  isScraped?: boolean;
  postId: number;
  className?: string;
}

/**
 * CardCornerButton 컴포넌트는 카드 모서리에 위치하는 버튼(스크랩, 관리, 리뷰 작성, 리뷰 보기)을 표시합니다.
 *
 * @param {CardCornerButtonType} cardCornerType - 버튼의 타입을 결정합니다. ("scrap", "manage", "write", "view" 중 하나)
 * 각 타입의 icon, width, text는 CARD_CORNER_BUTTON객체에서 관리합니다.
 * @param {boolean} isScraped - 스크랩 버튼의 경우, 현재 스크랩이 되어있는지 여부를 나타냅니다.
 * @param {number} [postId] - 관리, 리뷰 작성 버튼의 경우, 해당 포스트의 ID입니다.
 *
 * @example
 * <CardCornerButton cardCornerType="scrap" isScraped={true} postId={123}/>
 */
export default function CardCornerButton({
  cardCornerType = "scrap",
  isScraped = false,
  postId,
  className,
}: CardCornerButtonProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isScrapedValue, toggle] = useToggle(isScraped);
  const { text, icon, width } = CARD_CORNER_BUTTON[cardCornerType as CardCornerButtonType];

  const ScrapMutation = useMutation({
    mutationFn: (postId: number) => scrapAdd(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["homeCardList"] });
      queryClient.invalidateQueries({ queryKey: ["/my-page/scrap/list"] });
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
      //각종 카드리스트들 업데이트 하기
      toggle();
    },
  });

  const CancelScrapMutation = useMutation({
    mutationFn: (postId: number) => scrapCancel(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["homeCardList"] });
      queryClient.invalidateQueries({ queryKey: ["/my-page/scrap/list"] });
      queryClient.invalidateQueries({ queryKey: ["postDetail", postId] });
      //각종 카드리스트들 업데이트 하기
      toggle();
    },
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    switch (cardCornerType) {
      case "scrap":
        isScrapedValue ? CancelScrapMutation.mutate(postId) : ScrapMutation.mutate(postId);
        break;
      case "manage":
        navigate(`/mystudy/${postId}`);
        break;
      case "write":
        navigate(`/mystudy/${postId}/review`);
        break;
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
  gap: 0.2rem;
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
