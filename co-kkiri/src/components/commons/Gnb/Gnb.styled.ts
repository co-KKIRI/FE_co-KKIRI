import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

const { color, typography, mediaQueries, zIndex } = DESIGN_TOKEN;

export const Container = styled.div`
  position: sticky;
  top: 0;
  ${zIndex.sticky};
`;

export const Box = styled.div`
  background-color: ${color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2.2rem 4rem;

  ${mediaQueries.tablet} {
    padding: 2.2rem 3rem;
  }
  ${mediaQueries.mobile} {
    padding: 1.4rem 2rem;
  }
`;

export const LeftGroupWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const RightGroupWrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 11.9rem;
  height: 2.4rem;

  ${mediaQueries.tablet} {
    width: 11.9rem;
    height: 2.4rem;
  }

  ${mediaQueries.mobile} {
    width: 9.8rem;
    height: 2rem;
  }
`;

export const PostButton = styled.div`
  ${typography.font14Bold};
  color: ${color.primary[1]};

  ${mediaQueries.mobile} {
    display: none;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
`;

export const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
`;

export const Nickname = styled.div`
  ${typography.font14Medium}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 1;
`;

export const SignButton = styled.button`
  ${typography.font14Medium};
  &:hover {
    color: ${color.primary[1]};
  }
`;
