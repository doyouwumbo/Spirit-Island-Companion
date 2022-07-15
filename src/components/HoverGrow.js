import { useEffect, useState, useRef } from "react";


export function HoverGrow({scale = 2, timing = 500, translate = 0, children}) {

  // Check if the card is hovered
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  var timeoutId;
  const ref = useRef();

  const style = {
    transform: isHovered ? `scale(${scale}) translateY(-${translate}px)` : `scale(1)`,
    transition: `transform ${timing}ms`,
    position: 'relative',
    willChange: 'transform',
    zIndex: isHovered || isAnimated ? 999 : 0
  }

  function handleHover() {
    timeoutId = window.setTimeout(() => {
      setIsAnimated(true);
      setIsHovered(true);
    }, timing)    
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

  useEffect(() => {
    ref.current.addEventListener("transitionrun", () => {
      setIsAnimated(true)
    })

    ref.current.addEventListener("transitioncancel", () => {
      setIsAnimated(false)
    })
  }, []);

  return (
    <span ref={ref} onMouseEnter={handleHover} onMouseLeave={handleExit} onTransitionEnd={() => {setIsAnimated(false)}} style={style}>
      {children}
    </span>
  );
}