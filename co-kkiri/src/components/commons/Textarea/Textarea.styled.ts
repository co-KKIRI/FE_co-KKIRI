import { styled, css } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { VariantStyle } from "@/types/styledUtilTypes";
import { TextareaType } from ".";

const {
  color,
  typography: { font14Medium, font16Medium },
  boxShadow: { content },
} = DESIGN_TOKEN;

const TEXTAREA_TYPE: VariantStyle<TextareaType> = {
  comment: css`
    ${font14Medium}
    border: none;
    border-radius: 1.5rem;
    box-shadow: ${content};
    color: ${color.black[1]};
    width: 100%;
    height: 10.3rem;
    padding: 2rem 2.4rem;
  `,
  modal: css`
    ${font16Medium}
    color: ${color.black[1]};
    border: 1px solid ${color.gray[2]};
    border-radius: 0.5rem;
    background-color: ${color.white};
    width: 100%;
    //height: 미정
    padding: 1rem 2rem;
  `,
};

export const StyledTextarea = styled.textarea<{ $type: TextareaType }>`
  ${({ $type }) => css`
    ${TEXTAREA_TYPE[$type]}
  `}
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
`;
