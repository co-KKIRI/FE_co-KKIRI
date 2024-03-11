import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface BannerProps {
  isSidebarOpen?: boolean;
  onClick: () => void;
}

export default function Banner({ isSidebarOpen = false, onClick }: BannerProps) {
  return <Background $isSidebarOpen={isSidebarOpen} onClick={onClick}></Background>;
}

const {
  color,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Background = styled.button<{ $isSidebarOpen?: boolean }>`
  background-color: ${color.primary[3]};
  border-radius: 2rem;

  ${desktop} {
    width: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 29 : 36)}rem;
    height: 24rem;
  }

  ${tablet} {
    width: 22.6rem;
    height: 22.6rem;
  }

  ${mobile} {
    width: 10rem;
    height: 10rem;
  }
`;
