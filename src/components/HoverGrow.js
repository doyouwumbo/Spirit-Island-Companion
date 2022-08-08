import { useEffect, useState, useRef } from "react";


export function HoverGrow({scale = 2, transformTime = 500, hoverTime = 500, translateUp = 0, translateDown = 0, translateLeft = 0, translateRight = 0, clickable=false, children}) {

  // Check if the card is hovered
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  var timeoutId;
  const ref = useRef();

  const style = {
    ...children.style,
    transform: isHovered ? `scale(${scale}) translateY(-${translateUp}px) translateY(${translateDown}px) translateX(-${translateLeft}px) translateX(${translateRight}px)` : `scale(1)`,
    transition: `transform ${transformTime}ms`,
    position: 'relative',
    willChange: 'transform',
    zIndex: isHovered || isAnimated ? 999 : 0
  }

  function handleHover() {
    timeoutId = window.setTimeout(() => {
      setIsAnimated(true);
      setIsHovered(true);
      window.clearTimeout(timeoutId);
    }, hoverTime)    
  }

  function handleExit() {
    setIsHovered(false);
    setIsAnimated(true)
    const time = window.setTimeout(() => {
      setIsAnimated(false)
      window.clearTimeout(time);
    }, 500);
    window.clearTimeout(timeoutId);
  }

  function handleClick() {
    if (clickable && timeoutId !== undefined) {
      window.clearTimeout(timeoutId);
    }
  }

  useEffect(() => {
    ref.current.addEventListener("transitionrun", () => {
      setIsAnimated(true)
    })

    ref.current.addEventListener("transitioncancel", () => {
      setIsAnimated(false)
    })
  }, []);

  return (
    <span ref={ref} onMouseDown={handleClick} onMouseEnter={handleHover} onMouseLeave={handleExit} onTransitionEnd={() => {setIsAnimated(false)}} style={style}>
      {children}
    </span>
  );
}