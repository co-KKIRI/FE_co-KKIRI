import { ROUTER_PATH } from "@/lib/path";
import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import Banner from "./Banner";

//임시(/src/constants/bannerInfos.ts)
const { POST_PATH, STUDY_LIST_PATH, CASTING } = ROUTER_PATH;
const BANNER_INFOS = [
  { id: 0, img: { src: "", alt: "" }, path: POST_PATH },
  { id: 1, img: { src: "", alt: "" }, path: STUDY_LIST_PATH },
  { id: 2, img: { src: "", alt: "" }, path: CASTING },
];

export default function Banners() {
  return (
    <Box>
      {BANNER_INFOS.map(({ id, img, path }) => (
        <Banner key={id} image={img} path={path} />
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
