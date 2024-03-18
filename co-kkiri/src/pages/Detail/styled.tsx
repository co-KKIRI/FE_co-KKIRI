import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import BackButton from "@/components/commons/BackButton";
import Button from "@/components/commons/Button";
import RecruitmentPost from "@/components/domains/detail/RecruitmentPost";
import Comments from "@/components/domains/detail/Comments";
import ShareAndScrap from "@/components/domains/detail/ShareAndScrap";
import DetailCard from "@/components/domains/detail/DetailCard";

const {
  mediaQueries: { desktop, tablet, mobile },
} = DESIGN_TOKEN;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  ${desktop} {
    padding-top: 6.3rem;
  }

  ${tablet} {
    padding-top: 7.2rem;
  }

  ${mobile} {
    padding-top: 1.2rem;
  }
`;

export const Box = styled.div`
  display: grid;
  ${desktop} {
    grid-template:
      "back  shareAndScrap . ."
      ". . . ." 1.5rem
      "post post . card"
      "post post . ." 12.7rem
      "post post . comments"
      ". . . comments" 3.2rem
      "button button . comments"
      ". . . comments"
      / 40.4rem 9.6rem 6rem 35rem;
  }
  ${tablet} {
    grid-template:
      "back . ."
      ". . ." 2.4rem
      "card card card"
      ". . ." 8rem
      "post post post"
      ". . ." 3.2rem
      "button . shareAndScrap"
      ". . ." 8rem
      "comments comments comments"
      /38.4rem 2rem 9.6rem;
  }
  ${mobile} {
    grid-template:
      "back . ."
      ". . ." 2.4rem
      "card card card"
      ". . ." 8rem
      "post post post"
      ". . ." 3.2rem
      "button . shareAndScrap"
      ". . ." 8rem
      "comments comments comments"
      /21.4rem 1rem 9.6rem;
  }
`;

export const GoBackButton = styled(BackButton)`
  grid-area: back;
  align-self: center;
`;

export const ShareAndScrapButton = styled(ShareAndScrap)`
  grid-area: shareAndScrap;
  align-self: center;
  justify-self: flex-end;
`;

export const PostSection = styled(RecruitmentPost)`
  grid-area: post;
`;

export const DetailCardSection = styled(DetailCard)`
  grid-area: card;
`;

export const CommentsSection = styled(Comments)`
  grid-area: comments;
`;

export const MappedButton = styled(Button)`
  grid-area: button;
`;
