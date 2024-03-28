import { ROUTER_PATH } from "@/lib/path";
import * as S from "./SideBar.styled";
import { ICONS } from "@/constants/icons";
import { Link } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";
import { useWindowSize } from "usehooks-ts";
import Footer from "../Footer";

interface SideBarListProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SideBarList({ onClick }: SideBarListProps) {
  const { HOME_PATH, STUDY_LIST_PATH, SCOUT } = ROUTER_PATH;

  const { width: screenWidth } = useWindowSize();
  const isTabletOrMobile = screenWidth < 1200;

  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);

  const toggleSideBarInTabletOrMobile = () => {
    if (isTabletOrMobile) {
      toggleSideBar();
    }
  };

  return (
    <S.Container>
      <S.Box>
        <S.HamburgerMenuWrapper onClick={onClick}>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </S.HamburgerMenuWrapper>
        <S.CategoryBox>
          <Link to={HOME_PATH} onClick={toggleSideBarInTabletOrMobile}>
            <S.Category>홈</S.Category>
          </Link>
          <Link to={STUDY_LIST_PATH} onClick={toggleSideBarInTabletOrMobile}>
            <S.Category>스터디/프로젝트 찾기</S.Category>
          </Link>
          <Link to={SCOUT} onClick={toggleSideBarInTabletOrMobile}>
            <S.Category>스카우트</S.Category>
          </Link>
        </S.CategoryBox>
      </S.Box>
      <Footer />
    </S.Container>
  );
}
