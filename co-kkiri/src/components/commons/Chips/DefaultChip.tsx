import { MouseEvent } from "react";
import DESIGN_TOKEN from "@/styles/tokens";
import styled from "styled-components";

interface Icon {
  src: string;
  alt: string;
}

interface DefaultChipProps {
  label: string;
  imgUrl?: string;
  icon?: Icon;

  isSelected?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onIconClick?: (e: MouseEvent<HTMLImageElement>) => void;
  isVertical?: boolean;
  className?: string;
}

export default function DefaultChip({ label, imgUrl, icon, isSelected, onClick, onIconClick, isVertical, className }: DefaultChipProps) {
  return (
    <Container className={className} $isVertical={isVertical} $isSelected={isSelected} $isClickable={(onClick || onIconClick) ? true : false} onClick={!icon ? onClick : undefined}>
      {imgUrl && <div className="image-container"><img className="image" src={imgUrl} alt={label} /></div>}
      <span className="label">{label}</span>
      {icon && <img className="icon" src={icon.src} alt={icon.alt} onClick={onIconClick} />}
    </Container>
  );
}

/**
 * @param $isVertical: boolean - 세로로 배치할지 여부
 * @param $isSelected: boolean - 선택되었는지 여부
 * @param $isClickable: boolean - 클릭 가능한지 여부
 */
export interface DefaultChipContainerStyleProps {
  $isVertical?: boolean;
  $isSelected?: boolean;
  $isClickable?: boolean
}

const { color, typography } = DESIGN_TOKEN;

const Container = styled.div<DefaultChipContainerStyleProps>`
  width: fit-content;
  padding: 0.4rem 1.2rem;

  display: flex;

  background-color: ${color.gray[3]};
  color: ${color.black[3]};
  border-radius: 9999rem;

  ${typography.font12Semibold}

  ${({ $isVertical }) => $isVertical ? `
      flex-direction: column;
      align-items: center;
      gap: .4rem;
      padding: .8rem;
    ` : `
      flex-direction: row;
      align-items: center;
      gap: 1.2rem;
      `
  }

  ${({$isClickable}) => $isClickable && `cursor: pointer;`}

  & .image-container{
    width: 3.6rem;
    height: 3.6rem;
  }

  & .image{
    object-fit: cover;
  }

  & .icon{
    width: 1.4rem;
    height: 1.4rem;
    ${({$isClickable}) => $isClickable && `cursor: pointer;`}
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
