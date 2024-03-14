import { Link } from "react-router-dom";

import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import useResponsiveSidebar from "@/hooks/useResponsiveSideBar";

//임시
interface Image {
  src: string;
  alt: string;
}

interface BannerProps {
  image: Image;
  path: string;
}

export default function Banner({ image, path }: BannerProps) {
  const isSidebarOpenNarrow = useResponsiveSidebar();

  return (
    <Link to={path}>
      <Background $isSidebarOpenNarrow={isSidebarOpenNarrow}>
        <img src={image.src} alt={image.alt} />
      </Background>
    </Link>
  );
}

const {
  color,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Background = styled.figure<{ $isSidebarOpenNarrow: boolean }>`
  background-color: ${color.primary[3]};
  border-radius: 2rem;

  ${desktop} {
    width: ${({ $isSidebarOpenNarrow }) => ($isSidebarOpenNarrow ? 29 : 36)}rem;
    height: 24rem;
  }

  ${tablet} {
    width: 22.6rem;
    height: 22.6rem;
  }

  ${mobile} {
    max-width: 22.6rem;
    width: 100%;

    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
`;
