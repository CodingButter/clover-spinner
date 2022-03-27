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
  const [itemIndex, setItemIndex] = useState(3);
  const timing = Math.min(7,winner/data.length * 20);

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
          timing={timing}
          itemIndex={data[data.length]?itemIndex:itemIndex-3}
          count={data.length}>
              {data[data.length-1] && [data[data.length-1],data[data.length-2],data[data.length-3]].map((label,index)=>
              <ListItem
               key={`${label}`}>
               <span>{label}</span>
               <span> - </span>
               <span>{index+data.length-3}</span>
             </ListItem>
              )}
             <ListItem>
                <span>Clover </span>
                <span>  </span>
                <span>Competitions</span>
              </ListItem>
          {data.map((label, index) => {
            
            return (
              <ListItem
                key={`${index}-${label}`}>
                <span>{label}</span>
                <span> - </span>
                <span>{index}</span>
              </ListItem>
            );
          })}
           {data.map((label, index) => {
            
            return (
              <ListItem
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
