import { useState } from "react";
import UserProfileModal from "@/components/modals/UserProfileModal/";

export default function ModalTestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const userInfo = {
    profileImg: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    position: "프론트엔드",
    nickname: "123",
    career: 2,
    stacks: ["react", "next.js"],
    introduce: "잘 부탁드립니다.",
    link: "https://www.youtube.com",
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
          stacks={userInfo.stacks}
          introduce={userInfo.introduce}
          link={userInfo.link}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
