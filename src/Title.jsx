import React from "react";

export const Title = ({ children }) => {
  return (
    <h2 className="text-3xl tracking-tighter leading-10 text-center lg:text-left p-6 lg:pl-0 lg:text-4xl lg:pr-20">
      {children}
    </h2>
  );
};
