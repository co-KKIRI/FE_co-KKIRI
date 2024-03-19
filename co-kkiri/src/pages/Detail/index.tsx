import * as S from "./styled";
import { studyDetailData } from "@/lib/mock/studyDetail";

export default function Detail() {
  const detailInfo = studyDetailData.result;

  return (
    <S.Container>
      <S.Box>
        <S.GoBackButton />
        <S.ShareAndScrapButton isScraped={detailInfo.isScraped} />
        <S.PostSection detailInfo={detailInfo} />
        <S.DetailCardSection detailInfo={detailInfo} />
        <S.CommentsSection commentsNum={detailInfo.commentsNum} />
        <S.MappedButton variant="primary">지원하기</S.MappedButton>
        {/* 로직에 따라서 버튼 표시여부, 내부 텍스트 및 색상, 클릭 시 각 버튼에 해당하는 기능 맵핑 예정 */}
      </S.Box>
    </S.Container>
  );
}
