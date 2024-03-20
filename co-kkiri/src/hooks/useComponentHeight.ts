import { useState, useEffect, RefObject } from "react";

// T는 사용하는 곳에서 지정할 데이터 타입입니다.
function useComponentHeight<T>(data: T, componentRef: RefObject<HTMLElement>, defaultValue: number = 0): number {
  const [componentHeight, setComponentHeight] = useState<number>(defaultValue);

  useEffect(() => {
    const checkComponentHeight = () => {
      if (data && componentRef.current) {
        setComponentHeight(componentRef.current.offsetHeight);
      }
    };

    checkComponentHeight();
  }, [data, componentRef]);

  return componentHeight;
}

export default useComponentHeight;
