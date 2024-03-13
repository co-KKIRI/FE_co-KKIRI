import DESIGN_TOKEN from "@/styles/tokens";
import { useState } from "react";
import styled from "styled-components";
import { ICONS } from "@/constants/icons";

interface CategoryProps {
  categoryType: "list" | "mystudy";
  onSelectCategory: (category: string) => void;
}

export default function Category({ categoryType, onSelectCategory }: CategoryProps) {
  const categoryList = {
    list: ["전체", "스터디", "프로젝트"],
    mystudy: ["내가 신청한", "모집중", "진행중", "완료"],
  };

  const [selectedCategory, setSelectedCategory] = useState(categoryList[categoryType][0]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <Container>
      {categoryList[categoryType].map((category) => (
        <CategoryButton
          key={category}
          onClick={() => handleSelectCategory(category)}
          $isSelected={selectedCategory === category}>
          <img src={ICONS.categorySelected.src} alt={ICONS.categorySelected.alt} />
          {category}
        </CategoryButton>
      ))}
    </Container>
  );
}

const { typography, color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

const CategoryButton = styled.button<{ $isSelected: boolean }>`
  ${typography.font20Bold}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.6rem;
  color: ${(props) => (props.$isSelected ? `${color.black[1]}` : `${color.gray[1]}`)};

  img {
    display: ${(props) => (props.$isSelected ? "block" : "none")};
  }
`;
