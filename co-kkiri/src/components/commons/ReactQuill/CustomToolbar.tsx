import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";

const { color } = DESIGN_TOKEN;

export default function CustomToolbar() {
  return (
    <ToolbarContainer>
      <div id="toolbar">
        <HeaderContainer>
          <button className="ql-header" value="1"></button>
          <button className="ql-header" value="2"></button>
          <button className="ql-header" value="3">
            H3
          </button>
          <button className="ql-blockquote" />
        </HeaderContainer>
        <TextStyleContainer>
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
          <select className="ql-color" />
          <select className="ql-background" />
        </TextStyleContainer>
        <AlignmentContainer>
          <button className="ql-align" value=""></button>
          <button className="ql-align" value="center"></button>
          <button className="ql-align" value="right"></button>
        </AlignmentContainer>
        <ListContainer>
          <button className="ql-list" value="ordered"></button>
          <button className="ql-list" value="bullet"></button>
        </ListContainer>
        <span className="ql-formats">
          <button className="ql-link" />
          <button className="ql-image" />
        </span>
      </div>
    </ToolbarContainer>
  );
}

const ToolbarContainer = styled.div`
  #toolbar {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 4.3rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: none;
    background-color: ${color.gray[3]};
    border: 0.1rem solid ${color.gray[2]};
    padding: 2rem;

    & button {
      font-size: 14px;
      padding: 0 !important;
      width: 1.8rem;
      margin-right: 0.8rem;
    }
  }
`;

const HeaderContainer = styled.span``;

const TextStyleContainer = styled.span``;

const AlignmentContainer = styled.span``;

const ListContainer = styled.span``;
