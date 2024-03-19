import styled from "styled-components";

interface ButtonProps {
  icon: {
    src: string;
    alt: string;
  };
  type: "button" | "reset" | "submit";
  onClick?: () => void;
}

export default function Button({ icon, type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      <StyledImage src={icon.src} alt={icon.alt} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.3rem;
`;

const StyledImage = styled.img`
  width: 100%;
`;
