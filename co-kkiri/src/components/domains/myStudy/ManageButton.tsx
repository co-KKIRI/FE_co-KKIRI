import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICONS } from "@/constants/icons";

interface ManageProps {
  postId: number;
}

export default function ManageButton({ postId }: ManageProps) {
  return (
    <Link to={`/mystudy/${postId}`}>
      <ManageIcon src={ICONS.manage.src} alt={ICONS.manage.alt} />
    </Link>
  );
}

const ManageIcon = styled.img`
  width: 3.6rem;
  cursor: pointer;
`;
