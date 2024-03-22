import styled from "styled-components";

interface CircularProgressBarProps {
  percentage: number;
}

export default function CircularProgressBar({ percentage }: CircularProgressBarProps) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="130px" height="130px">
        <defs>
          <linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse">
            <stop stopColor="#29C4BA" />
            <stop offset="1" stopColor="#BCEBE8" />
          </linearGradient>
        </defs>
        <Background cx={65} cy={65} r={60} strokeWidth={10} fill="none" stroke="#f1f8f7" />
        {percentage > 0 && (
          <Progress
            aria-label="progress-bar"
            cx={65}
            cy={65}
            r={60}
            fill="none"
            stroke="url(#linear-gradient)"
            strokeLinecap="round"
            strokeWidth={10}
            pathLength={100}
            transform="rotate(-90 65 65)"
            strokeDasharray={100}
            $percentage={100 - percentage > 0 ? 100 - percentage : 0}
          />
        )}
      </svg>
    </div>
  );
}

const Background = styled.circle``;

interface ProgressProps {
  $percentage: number;
}

const Progress = styled.circle<ProgressProps>`
  background-color: beige;

  @keyframes progress {
    from {
      stroke-dashoffset: 100;
    }
    to {
      stroke-dashoffset: ${({ $percentage }) => $percentage};
    }
  }

  animation: progress 1s ease-out forwards 1;
`;
