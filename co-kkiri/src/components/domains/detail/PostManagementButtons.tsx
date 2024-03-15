import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { useNavigate, useParams } from "react-router-dom";

export default function PostManagementButtons() {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/list/${postId}/edit`);
  };

  const handleDeleteClick = async () => {}; //api

  return (
    <Container>
      <EditButton type="button" onClick={handleEditClick}>
        수정
      </EditButton>
      <Divider />
      <DeleteButton type="button" onClick={handleDeleteClick}>
        삭제
      </DeleteButton>
    </Container>
  );
}
const { color } = DESIGN_TOKEN;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.2rem;
  flex-shrink: 0;
  background: ${color.gray[2]};
`;
const EditButton = styled.button`
  color: ${color.black[3]};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: normal;
`;
const DeleteButton = styled(EditButton)``;
