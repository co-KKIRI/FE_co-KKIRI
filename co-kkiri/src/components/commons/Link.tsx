import styled from "styled-components";
import { LinkProps as RouterLinkProps, Link as RouterLink } from "react-router-dom";
import { Image } from "@/types/imageTypes";

export interface LinkProps extends RouterLinkProps {
  label?: string;
  icon?: Image;
  linkType: "internal" | "external";
  className?: string;
}

export default function Link({ label, icon, linkType, className, to, ...rest }: LinkProps) {
  return (
    <>
      {linkType === "external" ? (
        <a href={to.toString()} target="_blank" rel="noopener noreferrer">
          <Wrapper className={className}>
            {label}
            {icon && <img src={icon.src} alt={icon.alt} />}
          </Wrapper>
        </a>
      ) : (
        <RouterLink to={to} {...rest}>
          <Wrapper className={className}>
            {label}
            {icon && <img src={icon.src} alt={icon.alt} />}
          </Wrapper>
        </RouterLink>
      )}
    </>
  );
}

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  & > img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
