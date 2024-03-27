import { useEffect } from "react";
import { googleLogin } from "@/lib/api/auth";
import useAuthModalToggleStore from "@/stores/authModalToggle";
import { useUserInfoStore } from "@/stores/userInfoStore";

const AuthListener = () => {
  const setIsAuthModalOpen = useAuthModalToggleStore((state) => state.setIsAuthModalOpen);
  const fetchUserInfo = useUserInfoStore((state) => state.fetchUserInfo);

  const getAccessToken = async (code: string) => {
    const response = await googleLogin(code);
    // console.log(response); 리스폰스 확인용
  };

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data && event.data.type === "OAuthSuccess") {
        await getAccessToken(event.data.code);
        await fetchUserInfo();
        setIsAuthModalOpen(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [fetchUserInfo, setIsAuthModalOpen]);

  return null;
};

export default AuthListener;
function googleLogins() {
  throw new Error("Function not implemented.");
}
