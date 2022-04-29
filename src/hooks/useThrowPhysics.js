import { useEffect, useState } from "react";
const useThrowPhysics = ({
  updater,
  canThrow,
  throwRef,
  clickRef,
  friction = 0.9,
  min = 0,
  max,
}) => {
  const [position, setPosition] = useState(0);
  var mouseDown, mouseUp, mouseMove, loopInt;
  const init = () => {
    var mouseIsDown = false;
    var accel = 0;
    var lastPos = 0;
    var mouseYPos = 0;
    const loop = () => {
      setPosition((currentState) => {
        var updatedState = currentState - accel;
        if (updatedState < min) updatedState = min;
        if (updatedState > max) updatedState = max;
        return updatedState;
      });
      if (!mouseIsDown) {
        if (Math.abs(accel) > 0.1) {
          accel *= friction;
        } else {
          accel = 0;
        }
      } else {
        accel = mouseYPos - lastPos;
        lastPos = mouseYPos;
      }
    };
    mouseMove = (e) => {
      const rect = clickRef.current?.getBoundingClientRect();
      mouseYPos = e.clientY - rect.top + position;
    };
    mouseDown = () => {
      mouseIsDown = true;
    };
    mouseUp = () => {
      mouseIsDown = false;
    };
    loopInt = setInterval(loop, 12);
  };
  const resetPosition = () => {
    setPosition(0);
  };
  useEffect(() => {
    if (canThrow) {
      init();
      clickRef.current?.addEventListener("mousemove", mouseMove);
      clickRef.current?.addEventListener("mousedown", mouseDown);
      clickRef.current?.addEventListener("dblclick", resetPosition);
      window.addEventListener("mouseup", mouseUp);
    } else {
      setPosition(0);
    }
    return () => {
      clickRef.current?.removeEventListener("mousemove", mouseMove);
      clickRef.current?.removeEventListener("mousedown", mouseDown);
      clickRef.current?.removeEventListener("dblclick", resetPosition);
      window.removeEventListener("mouseup", mouseUp);
      clearInterval(loopInt);
    };
  }, [clickRef, throwRef, canThrow, updater]);
  return position;
};

export default useThrowPhysics;
