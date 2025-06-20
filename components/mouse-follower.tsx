"use client";

import React, { useEffect, useRef } from "react";

export default function MouseFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      posX.current += (mouseX.current - posX.current) * 0.1;
      posY.current += (mouseY.current - posY.current) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${posX.current}px`;
        dotRef.current.style.top = `${posY.current}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="w-15 h-15 blur-xl bg-primary rounded-full fixed pointer-events-none"
      style={{
        left: 0,
        top: 0,
        zIndex: -1,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
