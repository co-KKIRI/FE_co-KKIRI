import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import Banner from "./Banner";
import { BANNERS } from "@/constants/banners";

export default function Banners() {
  return (
    <Box>
      {BANNERS.map(({ img, path }) => (
        <Banner key={path} image={img} path={path} />
      ))}
    </Box>
  );
}

const {
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

const Box = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;

  ${desktop} {
    gap: 2rem;
  }

  ${tablet} {
    gap: 1.5rem;
  }

  ${mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;
