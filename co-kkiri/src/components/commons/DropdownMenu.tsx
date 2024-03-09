import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

export default function DropdownMenu() {
  return (
    <Container>
      <Option>전체</Option>
      <Option>프론트엔드</Option>
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.4rem;
  padding: 1.6rem 0;
  padding-left: 1.4rem;
  border-radius: 2rem;
  border: 0.1rem solid ${color.gray[2]};
  gap: 1.6rem;
`;

const Option = styled.div`
  ${typography.font12Semibold}
  color: ${color.black[1]};
  cursor: pointer;
`;
