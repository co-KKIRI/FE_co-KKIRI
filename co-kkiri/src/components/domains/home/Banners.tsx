import { ROUTER_PATH } from "@/lib/path";
import Banner from "./Banner";
import styled from "styled-components";

interface BannersProps {
  isSidebarOpen?: boolean;
}

//임시(/src/constants/bannerInfos.ts)
const { POST_PATH, STUDY_LIST_PATH, CASTING } = ROUTER_PATH;
const BANNER_INFOS = [
  { id: 0, img: { src: "", alt: "" }, path: POST_PATH },
  { id: 1, img: { src: "", alt: "" }, path: STUDY_LIST_PATH },
  { id: 2, img: { src: "", alt: "" }, path: CASTING },
];

export default function Banners({ isSidebarOpen = false }: BannersProps) {
  return (
    <Box>
      {BANNER_INFOS.map(({ id, img, path }) => (
        <Banner key={id} image={img} path={path} isSidebarOpen={isSidebarOpen} />
      ))}
    </Box>
  );
}

const Box = styled.article`
  display: flex;
  gap: 2rem;
`;
