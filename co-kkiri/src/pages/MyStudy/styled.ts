import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

import FilterList from "@/components/commons/FilterList";
import Button from "@/components/commons/Button";

const {
  color,
  spacing,
  typography: { font20Bold },
  mediaQueries: { tablet, mobile },
} = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  display: inline-grid;
  padding-top: 2.6rem;
  padding-bottom: 12rem;
`;

export const Title = styled.div`
  ${font20Bold}
  color:${color.black[1]};
  padding-bottom: 2.6rem;

  ${tablet} {
    padding-left: ${spacing.tablet};
  }

  ${mobile} {
    padding-left: ${spacing.mobile};
  }
`;

export const FilterListSection = styled(FilterList)`
  padding-bottom: 4rem;

  ${tablet} {
    padding-left: ${spacing.tablet};
  }

  ${mobile} {
    padding-left: ${spacing.mobile};
  }
`;

export const ButtonSection = styled(Button)`
  width: 15.8rem;
  margin-top: 6rem;
  justify-self: center;

  ${mobile} {
    width: 32rem;
    margin-top: 4rem;
  }
`;
