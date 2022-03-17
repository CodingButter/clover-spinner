import { useState } from "react";
import Roller from "./Roller";
import settings from "../../config/settings.json";
import { Machine, GoButton, RollersContainer } from "./elements";
import { Input } from "../global";
const {
  machine: { rollers },
} = settings;

const SlotMachine = ({ raffle: { title, data }, run, setRun }) => {
  const [winner, setWinner] = useState(0);
  const hangleSetWinner = ({ target: { value } }) => {
    setWinner(value);
  };

  const Spin = () => {
    if (!run) setRun(true);
    else Reset();
  };

  const Reset = () => {
    setRun(false);
    setWinner(0);
  };
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
      <Input disabled={run} onChange={hangleSetWinner} value={winner} />
      <GoButton onClick={Spin}>{!run ? "Spin" : "Reset"}</GoButton>
    </Machine>
  );
};

export default SlotMachine;
