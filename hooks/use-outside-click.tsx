import React, { useEffect } from "react";

type MaybeElement<T> = T | null;

export const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<MaybeElement<T>>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
