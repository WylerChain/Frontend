"use client";
import React, { useEffect, useRef } from "react";
import "./index.css";
import useWindowSize from "@/hooks/useWindowSize";
import { Box } from "@mui/material";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef<HTMLDivElement>(null); // Add type assertion to HTMLDivElement

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      document.body.style.height = `${
        scrollingContainerRef.current.getBoundingClientRect().height
      }px`;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <Box className="parent">
      <Box ref={scrollingContainerRef}>{children}</Box>
    </Box>
  );
};

export default SmoothScroll;
