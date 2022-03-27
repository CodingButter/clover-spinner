import { useState,useEffect } from "react";
import SlotMachine from "../../components/slotmachine";
import { useRaffleManager } from "../../providers/RaffleProvider";
import RaffleTabs from "../../components/rafflenav";
const Home = () => {
  const [run, setRun] = useState(false);
  const { raffle } = useRaffleManager();
  const [winner, setWinner] = useState(0);
  const handleSetWinner = ({ target: { value } }) => {
    setWinner(value);
  };

  const Spin = () => {
    if(winner>raffle.data.length){
      alert("Ticket Out Of Range")
      return
    }
    if (!run) setRun(true);
    else Reset();
  };
  const Reset = () => {
    setRun(false);
    setWinner(0);
  };
  useEffect(()=>Reset(),[raffle])
  return (
    <>
      <RaffleTabs setRun={setRun} />
      {raffle && <SlotMachine run={run} Spin={Spin} handleSetWinner={handleSetWinner} winner={winner} setRun={setRun} Reset={Reset} raffle={raffle} />}
    </>
  );
};
export default Home;
