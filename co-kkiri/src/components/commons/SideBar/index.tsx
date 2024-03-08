import { ICONS } from "@/constants/icons";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/lib/path";
import * as S from "./SideBar.styled";

export default function SideBar() {
  const { HOME_PATH, STUDY_LIST_PATH, CASTING } = ROUTER_PATH;

  return (
    <S.Background>
      <S.Container>
        <S.HamburgerMenuWrapper>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </S.HamburgerMenuWrapper>
        <S.CategoryBox>
          <Link to={HOME_PATH}>
            <S.Category>홈</S.Category>
          </Link>
          <Link to={STUDY_LIST_PATH}>
            <S.Category>스터디/프로젝트 찾기</S.Category>
          </Link>
          <Link to={CASTING}>
            <S.Category>스카우트</S.Category>
          </Link>
        </S.CategoryBox>
      </S.Container>
    </S.Background>
  );
}
