import { useState } from "react";
import Roller from "./Roller";
import settings from "../../config/settings.json";
import { Machine, GoButton, RollersContainer } from "./elements";
import { Input } from "../global";
const {
  machine: { rollers },
} = settings;

const SlotMachine = ({
  raffle: { title, data },
  handleSetWinner,
  winner,
  run,
  Spin,
}) => {
  return (
    <Machine>
      <div
        style={{border:"20px solid #e3662a"}}
        className="mb-6 text-4xl w-4/5 text-center text-black bg-white block p-8 rounded-lg">
        {title}
      </div>
      <RollersContainer>
        <Roller
          doorText={rollers.door.text}
          winner={winner}
          data={data}
          run={run}
        />
      </RollersContainer>
      <div className="flex flex-row space-x-5">
        <Input
          disabled={run}
          className="p-4 w-[120px] text-lg"
          onChange={handleSetWinner}
          value={winner}
        />
        <GoButton onClick={Spin}>{!run ? "Spin" : "Reset"}</GoButton>
      </div>
    </Machine>
  );
};

export default SlotMachine;
