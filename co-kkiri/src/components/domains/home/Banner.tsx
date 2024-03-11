import { Link } from "react-router-dom";

import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

//임시
interface Image {
  src: string;
  alt: string;
}

interface BannerProps {
  isSidebarOpen: boolean;
  image: Image;
  path: string;
}

export default function Banner({ image, path, isSidebarOpen }: BannerProps) {
  return (
    <Link to={path}>
      <Background $isSidebarOpen={isSidebarOpen}>
        <img src={image.src} alt={image.alt} />
      </Background>
    </Link>
  );
}

const {
  color,
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Background = styled.figure<{ $isSidebarOpen?: boolean }>`
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
