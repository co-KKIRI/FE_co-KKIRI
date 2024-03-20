import * as S from "./UserProfileModal.styled";
import ModalLayout from "../ModalLayout";
import { IMAGES } from "@/constants/images";
import Stacks from "@/components/commons/Stacks";
import Positions from "@/components/commons/Positions";
import PositionChip from "@/components/commons/Chips/PositionChip";

interface UserProfileModalProps {
  profileImg: string;
  position: string;
  nickname: string;
  career: number;
  stack: string[];
  introduce: string;
  link: string[];
  onClose: () => void;
}

export default function UserProfileModal({
  profileImg,
  position,
  nickname,
  career,
  stack,
  introduce,
  link,
  onClose,
}: UserProfileModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320} onClose={onClose}>
      <S.Container>
        {profileImg ? (
          <S.ProfileImg src={profileImg} alt="프로필 이미지" />
        ) : (
          <img src={IMAGES.profileImgBig.src} alt={IMAGES.profileImgBig.alt} />
        )}
        <PositionChip label={position} />
        <S.ProfileBox>
          <S.ProfileWrapper>
            <S.Nickname>{nickname}</S.Nickname>
            <S.Career>{career ? `경력 ${career}년차` : "경력을 아직 작성하지 않았어요!"}</S.Career>
          </S.ProfileWrapper>
          <Stacks stacks={stack} />
          <S.Introduce>{introduce ? introduce : "한줄소개를 아직 작성하지 않았어요!"}</S.Introduce>
        </S.ProfileBox>
        <S.LinkBox>
          <S.Line />
          <S.LinkWrapper>
            {link.length > 0
              ? link.map((link) => (
                  <a key={link} href={link} target="_blank" rel="noopner noreferrer">
                    {link}
                  </a>
                ))
              : "링크없음"}
          </S.LinkWrapper>
        </S.LinkBox>
      </S.Container>
    </ModalLayout>
  );
}
