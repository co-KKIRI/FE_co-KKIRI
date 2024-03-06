import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    mounted &&
    typeof window !== "undefined" &&
    createPortal(children, document.getElementById("modal-root") as HTMLElement)
  );
};

export default ModalPortal;
