"use client";
import { useState } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return {
    isHovered,
    bind: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
  };
};
