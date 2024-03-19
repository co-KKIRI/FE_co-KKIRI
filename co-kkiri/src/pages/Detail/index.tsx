import { useRef } from "react";
import * as S from "./styled";
import useComponentHeight from "@/hooks/useComponentHeight";
import ScrollTop from "@/components/commons/FloatingButton/ScrollTop";
import { DetailInfo, studyDetailData } from "@/lib/mock/studyDetail";

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
        <ScrollTop />
      </S.Box>
    </S.Container>
  );
}
