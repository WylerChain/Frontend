"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export const CustomCursor = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return domLoaded ? (
    <AnimatedCursor
      innerSize={12}
      innerStyle={{ backgroundColor: "#9c27b0" }}
      outerSize={50}
      outerScale={1}
      outerStyle={{
        border: "1px solid #9c27b0 ",
        backgroundColor: "transparent",
      }}
    />
  ) : (
    <></>
  );
};
