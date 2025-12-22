import React from "react";

export default function Container({ className = "", as: Comp = "div", children }) {
  return (
    <Comp className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Comp>
  );
}