import { ICONS } from "@/constants/icons";
import DESIGN_TOKEN from "@/styles/tokens";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideBar() {
  return (
    <Container>
      <HamburgerMenuWrapper>
        <img src={ICONS.category.src} alt={ICONS.category.alt} />
      </HamburgerMenuWrapper>
      <CategoryBox>
        <Link to="/">
          <Category>홈</Category>
        </Link>
        <Category>스터디/프로젝트 찾기</Category>
        <Category>스카우트</Category>
      </CategoryBox>
    </Container>
  );
}

const { boxShadow, color, typography, mediaQueries } = DESIGN_TOKEN;

const Container = styled.div`
  width: 21rem;
  height: 63rem;
  box-shadow: ${boxShadow.content};
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  padding-left: 4rem;
  background-color: ${color.white};

  ${mediaQueries.tablet} {
    padding-left: 3rem;
    border-radius: 0;
    box-shadow: none;
    width: 21rem;
    height: 100vh;
  }

  ${mediaQueries.mobile} {
    padding-left: 3rem;
    padding-bottom: 3.8rem;
    width: 21rem;
    height: 100vh;
    box-shadow: none;
    border-radius: 0;
  }
`;

const CategoryBox = styled.div`
  ${typography.font14Semibold}
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  color: ${color.black[1]};
  padding-top: 3rem;
`;

const Category = styled.div`
  background-color: ${color.white};
  cursor: pointer;

  &:hover {
    color: ${color.primary[1]};
  }
`;

const HamburgerMenuWrapper = styled.div`
  padding-top: 2.8rem;
  display: none;

  ${mediaQueries.tablet} {
    display: block;
    padding-bottom: 3.8rem;
  }

  ${mediaQueries.mobile} {
    display: block;
    padding-bottom: 3.8rem;
  }
`;