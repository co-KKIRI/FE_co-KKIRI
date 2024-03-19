import { css, styled } from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { ButtonVariant } from ".";

const {
  color,
  mediaQueries,
  boxShadow: { floatingButton },
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
    border-radius: 50%;
    box-shadow: ${floatingButton};

    ${mediaQueries.desktop} {
      width: 7.2rem;
      height: 7.2rem;
      position: fixed;
      bottom: 8rem;
      right: 4rem;
    }

    ${mediaQueries.tablet} {
      width: 5.6rem;
      height: 5.6rem;
      position: fixed;
      bottom: 8rem;
      right: 3rem;
    }

    ${mediaQueries.mobile} {
      width: 5.6rem;
      height: 5.6rem;
      position: fixed;
      bottom: 8rem;
      right: 2rem;
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
      border: none;
    `};

  ${({ children }) =>
    children &&
    css`
      padding-top: 1.4rem;
      padding-bottom: 1.4rem;
    `};
`;

export const ButtonIcon = styled.img`
  ${mediaQueries.desktop} {
    width: 3rem;
  }
`;
