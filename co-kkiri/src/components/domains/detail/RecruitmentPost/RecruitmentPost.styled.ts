import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

const {
  color,
  typography: { font24Bold, font14Semibold, font16Medium },
  mediaQueries,
} = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50rem;

  ${mediaQueries.mobile} {
    width: 32rem;
  }
`;

export const Title = styled.div`
  ${font24Bold}
  color:${color.black[1]};
  width: 100%;
  flex-shrink: 0;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const CreatedDate = styled.span`
  ${font14Semibold}
  color:${color.gray[1]}
`;

export const InfoDivider = styled.div`
  width: 0.1rem;
  height: 0.8rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;

export const HorizontalDivider = styled.div`
  width: 0.1rem;
  width: 100%;
  height: 0.1rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;

export const Content = styled.div`
  ${font16Medium}
  color:${color.black[2]};
  width: 100%;
  margin-top: 1rem;
  flex-grow: 1;

  & .ql-align-center {
    text-align: center;
  }

  & .ql-align-right {
    text-align: right;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
`;
