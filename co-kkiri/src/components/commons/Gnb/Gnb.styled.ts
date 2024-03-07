import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

const { color, typography, mediaQueries, zIndex } = DESIGN_TOKEN;

const Container = styled.div`
  ${zIndex.sticky};
  position: sticky;
  background-color: ${color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${mediaQueries.desktop} {
    padding: 2.8rem 4rem;
  }
  ${mediaQueries.tablet} {
    padding: 2.8rem 3rem;
  }
  ${mediaQueries.mobile} {
    padding: 2.1rem 2rem;
  }
`;

const LeftGroupBox = styled.div`
  display: flex;
  gap: 2rem;
`;

const RightGroupBox = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Logo = styled.img`
  ${mediaQueries.desktop} {
    width: 11.9rem;
    height: 2.4rem;
  }
  ${mediaQueries.tablet} {
    width: 11.9rem;
    height: 2.4rem;
  }
  ${mediaQueries.mobile} {
    width: 9.8rem;
    height: 2rem;
  }
`;

const PostButton = styled.a`
  ${typography.font14Bold};
  color: ${color.primary[1]};
  ${mediaQueries.mobile} {
    display: none;
  }
`;

const Nickname = styled.a`
  ${typography.font14Medium};
`;

const SignButton = styled.button`
  ${typography.font14Medium};
  &:hover {
    color: ${color.primary[1]};
  }
`;

export { Container, LeftGroupBox, RightGroupBox, UserInfoWrapper, Logo, PostButton, Nickname, SignButton };
