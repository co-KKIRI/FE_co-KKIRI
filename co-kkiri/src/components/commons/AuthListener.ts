import { useEffect } from "react";
import { googleLogin } from "@/lib/api/auth";
import useAuthModalToggleStore from "@/stores/authModalToggle";

const AuthListener = () => {
  const setIsAuthModalOpen = useAuthModalToggleStore((state) => state.setIsAuthModalOpen);

  const getAccessToken = async (code: string) => {
    const response = await googleLogin(code);
    // console.log(response); 리스폰스 확인용
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "OAuthSuccess") {
        getAccessToken(event.data.code);
        setIsAuthModalOpen(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setIsAuthModalOpen]);

  return null;
};

export default AuthListener;
function googleLogins() {
  throw new Error("Function not implemented.");
}
