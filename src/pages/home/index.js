import { useState } from "react";
import SlotMachine from "../../components/slotmachine";
import { useRaffleManager } from "../../providers/RaffleProvider";
import RaffleTabs from "../../components/rafflenav";
const Home = () => {
  const [run, setRun] = useState(false);
  const { raffle } = useRaffleManager();
  return (
    <>
      <RaffleTabs setRun={setRun} />
      {raffle && <SlotMachine run={run} setRun={setRun} raffle={raffle} />}
    </>
  );
};
export default Home;
