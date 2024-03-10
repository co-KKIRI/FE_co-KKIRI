import * as S from "./UserProfileModal.styled";
import ModalLayout from "../ModalLayout";
import { IMAGES } from "@/constants/images";
import PositionChip from "../../commons/Chips/PositionChip";
import Stacks from "../../commons/Card/Stacks";

// 임시
interface Stack {
  id: number;
  img: string;
}

interface UserProfileModalProps {
  profileImg: string;
  position: string[];
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
          <img src={profileImg} alt="프로필 이미지" />
        ) : (
          <img src={IMAGES.profileImgBig.src} alt={IMAGES.profileImgBig.alt} />
        )}
        <S.PositionWrapper>
          {position.length > 0 ? (
            position.map((pos, index) => <PositionChip key={index} label={pos} />)
          ) : (
            <PositionChip label="포지션" /> /** card 컴포넌트의 position과 함께 갈지 말지 고민 */
          )}
        </S.PositionWrapper>
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
            {link.length > 0 ? (
              link.map((link, index) => (
                <a key={index} href={link} target="_blank" rel="noopner noreferrer">
                  {link}
                </a>
              ))
            ) : (
              <div>링크없음</div>
            )}
          </S.LinkWrapper>
        </S.LinkBox>
      </S.Container>
    </ModalLayout>
  );
}
