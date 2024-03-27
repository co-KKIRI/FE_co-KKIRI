import styled from "styled-components";
import DESIGN_TOKEN from "@/styles/tokens";
import { useNavigate, useParams } from "react-router-dom";
import usePostMutation from "@/hooks/useMutation/usePostMutation";
import useOpenToggle from "@/hooks/useOpenToggle";
import ConfirmModal from "@/components/modals/ConfirmModal";

export default function PostManagementButtons() {
  const { id } = useParams();
  const postId = Number(id);
  const navigate = useNavigate();
  const { deleteMutation } = usePostMutation();
  const { isOpen, openToggle } = useOpenToggle();

  const handleEditClick = () => {
    navigate(`/list/${postId}/edit`);
  };

  const handleDeleteClick = () => {
    deleteMutation.mutate(postId, {
      onSuccess: () => {
        openToggle();
        navigate("/list");
      },
    });
  };

  return (
    <>
      <Container>
        <EditButton type="button" onClick={handleEditClick}>
          수정
        </EditButton>
        <Divider />
        <DeleteButton type="button" onClick={openToggle} disabled={deleteMutation.isPending}>
          삭제
        </DeleteButton>
      </Container>
      {isOpen && <ConfirmModal type="delete" onClose={openToggle} onClick={handleDeleteClick} />}
    </>
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

const DeleteButton = styled(EditButton)`
  &:disabled {
    color: ${color.gray[2]};
  }
`;
