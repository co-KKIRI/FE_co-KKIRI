import ModalLayout from "../ModalLayout";

interface EditUserProfileModalProps {
  onClose: () => void;
}

export default function EditUserProfileModal({onClose}: EditUserProfileModalProps){
  return(
    <ModalLayout desktopWidth={708} mobileWidth={320} onClick={onClose} onClose={onClose}>
      하이
    </ModalLayout>
  )
}
