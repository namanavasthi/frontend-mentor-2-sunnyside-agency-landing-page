import React from "react";

export const Article = ({ children }) => {
  return <article className="px-6 py-12 flex flex-col w-full lg:w-1/2">{children}</article>;
};