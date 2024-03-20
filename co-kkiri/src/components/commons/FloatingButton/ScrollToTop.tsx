import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import DESIGN_TOKEN from "@/styles/tokens";
import { ICONS } from "@/constants/icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsVisible(false);
  };

  useEffect(() => {
    const handleShowButton = () => {
      const { scrollY } = window;

      if (!scrollY) return;

      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);

    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return <>{isVisible && <Container variant="floating" icon={ICONS.scrollTop} onClick={scrollToTop} />}</>;
}

const { color } = DESIGN_TOKEN;

const Container = styled(Button)`
  background-color: ${color.primary[3]};
`;
