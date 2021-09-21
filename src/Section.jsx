import React from "react";

import { Wrapper } from "./Wrapper";

export const Section = ({ children, index }) => {
  const isOdd = index % 2 !== 0;

  return (
    <section>
      <Wrapper
        className={`flex flex-col-reverse ${
          isOdd ? "lg:flex-row" : "lg:flex-row-reverse"
        } justify-between items-center`}
      >
        {children}
      </Wrapper>
    </section>
  );
};
