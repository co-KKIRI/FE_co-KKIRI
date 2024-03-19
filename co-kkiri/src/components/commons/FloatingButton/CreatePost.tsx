import styled from "styled-components";
import Button from "../Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post`);
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
