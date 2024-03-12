import * as S from "./UserProfileModal.styled";
import ModalLayout from "../ModalLayout";
import { IMAGES } from "@/constants/images";
// import PositionChip from "../../commons/Chips/PositionChip";
import Stacks from "@/components/commons/Stacks";
import Positions from "@/components/commons/Positions";

// 임시 (id가 꼭 있어야 하는지, index로 key 값을 넘겨주는 방법도 고려)
interface Stack {
  name: string;
  img: string;
}

interface Position {
  name: string;
}

interface UserProfileModalProps {
  profileImg: string;
  position: Position[];
  nickname: string;
  career: number;
  stack: Stack[];
  introduce: string;
  link: string[];
}

export default function UserProfileModal({
  profileImg,
  position,
  nickname,
  career,
  stack,
  introduce,
  link,
}: UserProfileModalProps) {
  return (
    <ModalLayout desktopWidth={430} mobileWidth={320}>
      <S.Container>
        {profileImg ? (
          <S.ProfileImg src={profileImg} alt="프로필 이미지" />
        ) : (
          <img src={IMAGES.profileImgBig.src} alt={IMAGES.profileImgBig.alt} />
        )}
        <Positions position={position} />
        <S.ProfileBox>
          <S.ProfileWrapper>
            <S.Nickname>{nickname}</S.Nickname>
            <S.Career>{career ? `경력 ${career}년차` : "경력을 아직 작성하지 않았어요!"}</S.Career>
          </S.ProfileWrapper>
          <Stacks stack={stack} />
          <S.Introduce>{introduce ? introduce : "한줄소개를 아직 작성하지 않았어요!"}</S.Introduce>
        </S.ProfileBox>
        <S.LinkBox>
          <S.Line />
          <S.LinkWrapper>
            {link.length > 0
              ? link.map((link, index) => (
                  <a key={index} href={link} target="_blank" rel="noopner noreferrer">
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

/* {position.length > 0 ? (
  position.map((pos, index) => <PositionChip key={index} label={pos} />)
  ) : (
    <PositionChip label="포지션" /> 
    )} */
