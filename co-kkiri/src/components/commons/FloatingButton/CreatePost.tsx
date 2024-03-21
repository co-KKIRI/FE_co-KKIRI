import styled from "styled-components";
import Button from "../Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "@/lib/path";

export default function CreatePost() {
  const navigate = useNavigate();
  const { RECRUIT_PATH } = ROUTER_PATH;
  const handleClick = () => {
    navigate(RECRUIT_PATH);
  };

  return <Container variant="floating" icon={ICONS.post} onClick={handleClick} />;
}

const { color, mediaQueries } = DESIGN_TOKEN;

const Container = styled(Button)`
  background-color: ${color.primary[1]};
  display: none;
  ${mediaQueries.mobile} {
    display: inline-flex;
  }
`;
