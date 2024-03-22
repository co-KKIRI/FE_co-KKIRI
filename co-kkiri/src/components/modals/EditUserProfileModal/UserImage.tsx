import styled from "styled-components";
import { IMAGES } from "@/constants/images";
import { ICONS } from "@/constants/icons";
import DefaultFileSelector from "./FileSelector";

interface EditUserImageProps {
  profileImgUrl?: string;
  isEditable?: boolean;
  onSelect: (file: File | FileList) => void;
  className?: string;
}

export default function UserImage({ profileImgUrl, isEditable, onSelect, className }: EditUserImageProps) {
  return (
    <Container className={className}>
      <ProfileImg src={profileImgUrl ? profileImgUrl : IMAGES.profileImg.src} alt={IMAGES.profileImg.alt} />
      {isEditable && (
        <FileSelector
          name="profile"
          icon={ICONS.camera}
          onChange={(file) => {
            onSelect(file);
          }}
          type="image"
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 10rem;
  width: 10rem;

  margin-bottom: 2rem;

  position: relative;
  justify-self: center;
  align-self: center;


`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 9999rem;
  overflow: hidden;

  object-fit: cover;
`;

const FileSelector = styled(DefaultFileSelector)`
  position: absolute;
  bottom: -0.2rem;
  right: -0.2rem;
`;
