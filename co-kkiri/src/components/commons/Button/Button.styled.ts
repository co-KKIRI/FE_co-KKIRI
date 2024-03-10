import { css, styled } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ButtonVariant } from ".";

const {
  color,
  mediaQueries: { mobile },
} = DESIGN_TOKEN;

const VARIANT_STYLE = {
  primary: css`
    background-color: ${color.primary[1]};
    color: ${color.white};
  `,

  primaryLight: css`
    background-color: ${color.primary[3]};
    color: ${color.primary[1]};
  `,

  ghost: css`
    border: 1px solid ${color.primary[1]};
    background-color: ${color.white};
    color: ${color.primary[1]};
  `,

  red: css`
    background-color: ${color.red};
    color: ${color.white};
  `,

  floating: css`
    width: 5.6rem;
    height: 5.6rem;
    background-color: ${color.primary[1]};
    border-radius: 50%;
    display: none;
    ${mobile} {
      display: inline-flex;
    }
  `,
};

interface Container {
  $width?: number;
  $variant: ButtonVariant;
}

export const Container = styled.button<Container>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({ $width }) => ($width ? `width: ${$width / 10}rem;` : "width: 100%;")};
  height: 4.8rem;
  font-size: 1.6rem;
  line-height: normal;
  font-weight: 700;
  border-radius: 7.6rem;

  ${({ $variant }) => css`
    ${VARIANT_STYLE[$variant]}
  `};

  transition: background-color 0.2s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${color.gray[2]};
      color: ${color.white};
      pointer-events: none;
    `};

  ${({ children }) =>
    children &&
    css`
      padding-top: 1.4rem;
      padding-bottom: 1.4rem;
    `};
`;

export const ButtonIcon = styled.img`
  height: 1.935rem;
`;
