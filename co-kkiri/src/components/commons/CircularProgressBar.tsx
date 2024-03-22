import { HexColor } from "@/types/styledUtilTypes";
import { isValidHexColor } from "@/utils/styleUtils";
import { useId } from "react";
import styled from "styled-components";

interface CircularProgressBarProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  backgroundColor?: HexColor;
  topColor?: HexColor;
  bottomColor?: HexColor;
  animationDuration?: number;
  className?: string;
}

export default function CircularProgressBar({
  percentage,
  size,
  strokeWidth,
  backgroundColor,
  topColor,
  bottomColor,
  animationDuration,
  className,
}: CircularProgressBarProps) {
  const id = useId();

  return (
    <Container className={className} $strokeWidth={strokeWidth}>
      <svg xmlns="http://www.w3.org/2000/svg" width={`${size / 10}rem`} height={`${size / 10}rem`}>
        <defs>
          <linearGradient id={id} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={topColor && isValidHexColor(topColor) ? topColor : "#29C4BA"} />
            <stop offset="1" stopColor={bottomColor && isValidHexColor(bottomColor) ? bottomColor : "#BCEBE8"} />
          </linearGradient>
        </defs>
        <circle
          className="background-circle"
          cx={`${size / 20}rem`}
          cy={`${size / 20}rem`}
          r={`${(size - strokeWidth) / 20}rem`}
          strokeWidth={`${strokeWidth / 10}rem`}
          fill="none"
          stroke={backgroundColor && isValidHexColor(backgroundColor) ? backgroundColor : "#f1f8f7"}
        />
        {percentage > 0 && (
          <Progress
            aria-label="progress-bar"
            cx={`${size / 20}rem`}
            cy={`${size / 20}rem`}
            r={`${(size - strokeWidth) / 20}rem`}
            strokeWidth={`${strokeWidth / 10}rem`}
            fill="none"
            stroke={`url(#${id})`}
            strokeLinecap="round"
            pathLength={100}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            strokeDasharray={100}
            $percentage={100 - percentage > 0 ? 100 - percentage : 0}
            $animationDuration={animationDuration}
          />
        )}
      </svg>
    </Container>
  );
}

interface ContainerProps {
  $strokeWidth: number;
}
const Container = styled.div<ContainerProps>`
  ${({ $strokeWidth }) => `
    width: calc(100% + ${$strokeWidth / 10}rem);
    height: calc(100% + ${$strokeWidth / 10}rem);
`}

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ProgressProps {
  $percentage: number;
  $animationDuration?: number;
}

const Progress = styled.circle<ProgressProps>`
  @keyframes progress {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: ${({ $percentage }) => $percentage};
    }
  }

  animation: progress ${({ $animationDuration }) => ($animationDuration ? `${$animationDuration}s` : `0.8s`)} ease-out
    forwards 1;
`;
