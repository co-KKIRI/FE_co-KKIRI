import { Link } from "react-router-dom";
import useSideBarStore from "@/stores/sideBarStore";

import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

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
  const isSideBarOpen = useSideBarStore((state) => state.isSideBarOpen);

  return (
    <Link to={path}>
      <Background $isSideBarOpen={isSideBarOpen}>
        <img src={image.src} alt={image.alt} />
      </Background>
    </Link>
  );
}

const {
  color,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Background = styled.figure<{ $isSideBarOpen?: boolean }>`
  background-color: ${color.primary[3]};
  border-radius: 2rem;

  ${desktop} {
    width: ${({ $isSideBarOpen }) => ($isSideBarOpen ? 29 : 36)}rem;
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
