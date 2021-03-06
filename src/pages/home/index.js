import { useState, useEffect } from "react";
import SlotMachine from "../../components/slotmachine";
import { useRaffleManager } from "../../providers/RaffleProvider";
import RaffleTabs from "../../components/rafflenav";
const Home = () => {
  const [run, setRun] = useState(false);
  const [thrown, setThrown] = useState(false);
  const { raffle } = useRaffleManager();
  const [winner, setWinner] = useState(0);
  const handleSetWinner = ({ target: { value } }) => {
    setWinner(value);
  };

  const Spin = () => {
    if (winner > raffle.data.length) {
      alert("Ticket Out Of Range");
      return;
    }
    if (!run) setRun(true);
    else Reset();
  };
  const Reset = () => {
    setRun(false);
    setWinner(0);
  };
  useEffect(() => Reset(), [raffle]);
  return (
    <div className="h-[85%] w-full">
      <RaffleTabs Reset={Reset} />
      {raffle && (
        <SlotMachine
          run={run}
          thrown={thrown}
          setThrown={setThrown}
          Spin={Spin}
          handleSetWinner={handleSetWinner}
          winner={winner}
          setRun={setRun}
          Reset={Reset}
          raffle={raffle}
        />
      )}
    </div>
  );
};
export default Home;
