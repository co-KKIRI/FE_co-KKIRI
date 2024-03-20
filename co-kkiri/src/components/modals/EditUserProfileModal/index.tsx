import DefaultModalLayout from "../ModalLayout";
import EditUserProfileModalLayout from "./EditUserProfileModalLayout";
import styled from "styled-components";

interface EditUserProfileModalProps {
  onClose: () => void;
}

export default function EditUserProfileModal({ onClose }: EditUserProfileModalProps) {
  return (
    <ModalLayout desktopWidth={708} mobileWidth={320} onClick={onClose} onClose={onClose}>
      <EditUserProfileModalLayout />
    </ModalLayout>
  );
}

const ModalLayout = styled(DefaultModalLayout)`
  padding: 4rem 3rem 3rem 3rem;
`;