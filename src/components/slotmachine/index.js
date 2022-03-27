import { useState } from "react";
import Roller from "./Roller";
import settings from "../../config/settings.json";
import { Machine, GoButton, RollersContainer } from "./elements";
import { Input } from "../global";
const {
  machine: { rollers },
} = settings;

const SlotMachine = ({ raffle: { title, data },handleSetWinner, winner,run,Spin }) => {
   
  return (
    <Machine>
      <h1 className="mb-6 text-4xl text-white bg-green-400 p-8 rounded-lg">
        {title}
      </h1>
      <RollersContainer>
        <Roller
          doorText={rollers.door.text}
          winner={winner}
          data={data}
          run={run}
        />
      </RollersContainer>
      <Input disabled={run} onChange={handleSetWinner} value={winner} />
      <GoButton onClick={Spin}>{!run ? "Spin" : "Reset"}</GoButton>
    </Machine>
  );
};

export default SlotMachine;
