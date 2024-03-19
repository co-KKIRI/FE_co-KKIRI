import styled from "styled-components";
import Button from "../Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

export default function ScrollTop() {
  return <Container variant="floating" icon={ICONS.scrollTop} />;
}

const { color } = DESIGN_TOKEN;

const Container = styled(Button)`
  background-color: ${color.primary[3]};
`;
