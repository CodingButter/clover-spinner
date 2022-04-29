import { RollerContainer, RollerWindow, List, ListItem } from "./elements";
import Trig from "../../utilities/Trig";
import { useEffect, useRef, useState } from "react";
import settings from "../../config/settings.json";
import useThrowPhysics from "../../hooks/useThrowPhysics";
const {
  machine: { rollers },
} = settings;
const Roller = ({ data, winner, doorText, run, setThrown }) => {
  const radius = Trig.findRadius(data.length, rollers.height);
  const angleD = Trig.angleDelta(data.length);
  const [itemIndex, setItemIndex] = useState(3);
  const timing = Math.max(7, (winner / data.length) * 13);
  const transitionElement = useRef(null);
  const clickRef = useRef(null);
  const throwPosition = useThrowPhysics({
    updater: data,
    canThrow: run == false,
    clickRef,
    throwRef: transitionElement,
    friction: 0.93,
    min: 0,
    max: data.length - 1 > -1 ? (data.length - 1) * rollers.height : 1,
  });
  const startSound = useRef(new Audio("sounds/spin.wav"));
  startSound.current.loop = true;
  startSound.current.volume = settings.volume.spin;
  const transitionStart = () => {
    startSound.current.currentTime = 0;
    startSound.current.play();
  };
  const transitionOver = () => {
    startSound.current.pause();
    console.log({ name: data[winner], winner });
    if (data[winner].indexOf("Not") > -1) {
      var audio = new Audio("sounds/loser.wav");
      audio.volume = settings.volume.loser;
      audio.play();
    } else {
      var audio = new Audio("sounds/winner.wav");
      audio.volume = settings.volume.winner;
      audio.play();
    }
  };
  useEffect(() => {
    if (run) {
      setItemIndex(winner);
    } else {
      console.log({ throwPosition });
      setThrown(throwPosition > 0);
      setItemIndex(throwPosition / rollers.height);
    }
  }, [run, throwPosition, data]);
  useEffect(() => {
    transitionElement.current.addEventListener?.(
      "transitionend",
      transitionOver
    );
    transitionElement.current.addEventListener?.(
      "transitionstart",
      transitionStart
    );
    return () => {
      transitionElement.current.removeEventListener?.(
        "transitionend",
        transitionOver
      );
      transitionElement.current.removeEventListener?.(
        "transitionstart",
        transitionStart
      );
    };
  }, [transitionElement.current, winner]);
  return (
    <RollerContainer>
      <RollerWindow ref={clickRef}>
        <List
          ref={transitionElement}
          doorText={doorText}
          run={run}
          timing={timing}
          itemIndex={data[data.length] ? itemIndex : itemIndex - 3}
          count={data.length}
        >
          {data[data.length - 1] &&
            [
              data[data.length - 1],
              data[data.length - 2],
              data[data.length - 3],
            ].map((label, index) => (
              <ListItem key={`${index}`}>
                <span>{label}</span>
                <span> - </span>
                <span>{index + data.length - 3}</span>
              </ListItem>
            ))}
          <ListItem key="clover-competitions">
            <span>Clover </span>
            <span> </span>
            <span>Competitions</span>
          </ListItem>
          {data.map((label, index) => {
            return (
              <ListItem key={`${index}-${label}`}>
                <span>{label}</span>
                <span> - </span>
                <span>{index}</span>
              </ListItem>
            );
          })}
          {data.map((label, index) => {
            return (
              <ListItem key={`${index}-${label}`}>
                <span>{label}</span>
                <span> - </span>
                <span>{index}</span>
              </ListItem>
            );
          })}
        </List>
      </RollerWindow>
    </RollerContainer>
  );
};

export default Roller;
