import { useRef } from "react";
import { useOnClickOutside, useToggle } from "usehooks-ts";
import { Dispatch, SetStateAction, MutableRefObject } from "react";

interface UseOpenToggleReturn {
  isOpen: boolean;
  openToggle: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<HTMLDivElement | null>;
}

/**
 * useOpenToggle 훅을 사용하여 모달 혹은 옵션 메뉴의 열림/닫힘 상태를 관리합니다.
 *
 * 이 훅은 isOpen 상태, 상태를 토글하는 openToggle 함수, 상태를 직접 설정하는 setIsOpen 함수,
 * 그리고 외부 클릭을 감지하는데 사용되는 ref를 반환합니다. 외부 클릭 시 옵션 메뉴가 닫히도록 설정합니다.
 *
 * @returns {UseOpenToggleReturn} isOpen: 옵션 메뉴가 열려있는지 여부를 나타내는 boolean 값,
 *                                openToggle: 옵션 메뉴의 열림 상태를 토글하는 함수,
 *                                setIsOpen: 옵션 메뉴의 열림 상태를 직접 설정하는 setter함수,
 *                                ref: 컴포넌트 외부의 클릭을 감지하기 위한 ref 객체.
 */
export default function useOpenToggle(): UseOpenToggleReturn {
  const [isOpen, openToggle, setIsOpen] = useToggle();
  const ref = useRef<HTMLDivElement | null>(null);

  const close = () => isOpen && setIsOpen(false);

  useOnClickOutside(ref, close);

  return { isOpen, openToggle, setIsOpen, ref };
}
