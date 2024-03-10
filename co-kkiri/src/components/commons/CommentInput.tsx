import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

interface CommentInputProps {
  placeholder: string;
}

export default function CommentInput({ placeholder }: CommentInputProps) {
  return <StyledTextarea name="comment" placeholder={placeholder} />;
}

const {
  color,
  typography: { font14Medium },
  mediaQueries: { desktop, tablet, mobile },
  boxShadow: { content },
} = DESIGN_TOKEN;

const StyledTextarea = styled.textarea`
  ${font14Medium}
  border: none;
  border-radius: 1.5rem;
  box-shadow: ${content};
  color: ${color.black[1]};
  height: 10.3rem;
  padding: 2rem 2.4rem;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.gray[1]};
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  ${desktop} {
    width: 50rem;
  }
  ${tablet} {
    width: 35rem;
  }
  ${mobile} {
    width: 32rem;
  }
`;
