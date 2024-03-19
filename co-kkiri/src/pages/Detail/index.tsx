import { useRef } from "react";
import * as S from "./styled";
import { DetailInfo, studyDetailData } from "@/lib/mock/studyDetail";
import useComponentHeight from "@/hooks/useComponentHeight";

export default function Detail() {
  const detailInfo = studyDetailData.result;
  const cardRef = useRef<HTMLDivElement>(null);
  const cardHeight = useComponentHeight<DetailInfo>(detailInfo, cardRef, 407);

  return (
    <S.Container>
      <S.Box>
        <S.GoBackButton />
        <S.ShareAndScrapButton isScraped={detailInfo.isScraped} />
        <S.PostSection detailInfo={detailInfo} />
        <S.DetailCardSection cardRef={cardRef} detailInfo={detailInfo} />
        <S.CommentsSection commentsNum={detailInfo.commentsNum} />
        <S.ButtonSection $cardHeight={cardHeight} />
        {/* 로직에 따라서 버튼 표시여부, 내부 텍스트 및 색상, 클릭 시 각 버튼에 해당하는 기능 맵핑 예정 */}
      </S.Box>
    </S.Container>
  );
}
