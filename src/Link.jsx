import React, { useState } from "react";

export const Link = ({ children, to, highlight }) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative uppercase text-sm leading-6 text-neutral-very-dark-desaturated-blue text-center mt-5 tracking-widest"
        href={to}
        aria-label={children}
      >
        <span className="z-10 relative">{children}</span>
        <span
          className={`absolute w-full h-2.5 bg-primary-${highlight} z-0 left-0 bottom-0 ${
            focus || hover ? "opacity-100" : "opacity-25"
          } rounded `}
        ></span>
      </a>
    </div>
  );
};
