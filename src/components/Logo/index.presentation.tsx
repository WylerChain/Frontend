import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

export type LogoProps = {
  color: "white" | "black";
} & Omit<ImageProps, "src" | "alt">;

export const Logo: React.FC<LogoProps> = ({ color, ...rest }) => {
  return (
    <Image
      src={color === "white" ? "next.svg" : "vercel.svg"}
      alt="Logo"
      loading="lazy"
      height="23"
      width="144"
      style={{ objectFit: "contain" }}
      {...rest}
    />
  );
};
