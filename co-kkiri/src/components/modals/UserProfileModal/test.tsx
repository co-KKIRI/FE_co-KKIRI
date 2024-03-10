import { useState } from "react";
import UserProfileModal from "@/components/modals/UserProfileModal/";

export default function ModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const userInfo = {
    profileImg: "",
    position: [
      { id: 1, name: "프론트엔드" },
      { id: 2, name: "백엔드" },
    ],
    nickname: "123",
    career: 2,
    stack: [
      { id: 1, img: "https://simpleicons.org/icons/react.svg" },
      { id: 2, img: "https://simpleicons.org/icons/nextdotjs.svg" },
    ],
    introduce: "잘 부탁드립니다.",
    link: ["https://www.youtube.com"],
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <UserProfileModal
          profileImg={userInfo.profileImg}
          position={userInfo.position}
          nickname={userInfo.nickname}
          career={userInfo.career}
          stack={userInfo.stack}
          introduce={userInfo.introduce}
          link={userInfo.link}
        />
      )}
    </>
  );
}
