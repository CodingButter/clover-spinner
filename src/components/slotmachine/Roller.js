import { RollerContainer, RollerWindow, List, ListItem } from "./elements";
import Trig from "../../utilities/Trig";
import { useEffect, useState } from "react";
import settings from "../../config/settings.json";
const {
  machine: { rollers },
} = settings;
const Roller = ({ data, winner, doorText, run }) => {
  const radius = Trig.findRadius(data.length, rollers.height);
  const angleD = Trig.angleDelta(data.length);
  const [itemIndex, setItemIndex] = useState(0);
  const timing = winner < 200 ? 7 : 10 + Math.min(15, data.length / 150);

  useEffect(() => {
    if (run) {
      setItemIndex(winner);
    } else {
      setItemIndex(0);
    }
  }, [run]);
  return (
    <RollerContainer>
      <RollerWindow>
        <List
          doorText={doorText}
          run={run}
          itemIndex={itemIndex}
          count={data.length}>
          {data.map((label, index) => {
            const itemAngle = Trig.angleByOffset(angleD, index - itemIndex + 3);
            return (
              <ListItem
                run={run}
                timing={timing}
                angle={itemAngle}
                radius={radius}
                key={`${index}-${label}`}>
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
