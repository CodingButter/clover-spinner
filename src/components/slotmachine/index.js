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
      <h1
        style={{ background: "#e3662a" }}
        className="mb-6 text-4xl w-4/5 text-center text-white p-8 rounded-lg">
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
      <div className="flex flex-row space-x-5">
        <Input
          disabled={run}
          className="p-4 w-[120px] text-lg"
          onChange={handleSetWinner}
          value={winner}
        />
        <GoButton onClick={Spin}>{!run ? "Spin" : "Reset"}</GoButton>
      </div>
      <img className="w-[80px] mt-2" src="images/clovericon.png" />
    </Machine>
  );
};

export default SlotMachine;
