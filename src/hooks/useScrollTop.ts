import React, { useEffect, useState } from "react";

const useScrollTop = (
  ref: React.RefObject<HTMLElement>,
  defaultTop: number
) => {
  const [scrollTop, setScrollTop] = useState(defaultTop);

  const onScroll = () => {
    setScrollTop(
      Math.floor(ref.current?.getBoundingClientRect().top || defaultTop)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { scrollTop };
};

export default useScrollTop;
