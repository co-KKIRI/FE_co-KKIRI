import { ICONS } from "@/constants/icons";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "@/lib/path";
import * as S from "./SideBar.styled";
import React from "react";

interface SideBarProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SideBar({ onClick }: SideBarProps) {
  const { HOME_PATH, STUDY_LIST_PATH, CASTING } = ROUTER_PATH;

  return (
    <S.Background>
      <S.Container>
        <S.HamburgerMenuWrapper onClick={onClick}>
          <img src={ICONS.category.src} alt={ICONS.category.alt} />
        </S.HamburgerMenuWrapper>
        <S.CategoryBox>
          <Link to={HOME_PATH}>
            <S.Category onClick={onClick}>홈</S.Category>
          </Link>
          <Link to={STUDY_LIST_PATH}>
            <S.Category onClick={onClick}>스터디/프로젝트 찾기</S.Category>
          </Link>
          <Link to={CASTING}>
            <S.Category onClick={onClick}>스카우트</S.Category>
          </Link>
        </S.CategoryBox>
      </S.Container>
    </S.Background>
  );
}
