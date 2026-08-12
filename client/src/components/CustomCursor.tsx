import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    const isTouchDevice = window.matchMedia(
      "(pointer: coarse)"
    ).matches;

    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setIsVisible(true);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const interactiveElement = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(interactiveElement));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <>
      {/* Outer cursor */}
      <div
        className={`
          pointer-events-none
          fixed
          z-[9999]
          rounded-full
          border
          border-[#C58B55]
          transition-[width,height,opacity,border-color]
          duration-200
          ease-out
          ${
            isHovering
              ? "w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-[#C58B55]/10"
              : "w-6 h-6 -translate-x-1/2 -translate-y-1/2"
          }
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* Center dot */}
      <div
        className={`
          pointer-events-none
          fixed
          z-[10000]
          w-1.5
          h-1.5
          rounded-full
          bg-[#C58B55]
          -translate-x-1/2
          -translate-y-1/2
          transition-transform
          duration-150
          ${
            isHovering
              ? "scale-0"
              : "scale-100"
          }
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}