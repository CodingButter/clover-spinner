import { createContext, useContext, useState } from "react";

const raffleContext = createContext([]);
export const useRaffleManager = () => useContext(raffleContext);
export const RaffleProvider = ({ children }) => {
  const [raffles, setRaffles] = useState([]);
  const [raffle, setRaffle] = useState(raffles[0]);

  const updateRaffle = (raffleIndex, title, data, ticketsSold) => {
    setRaffles((currentState) =>
      currentState.map((raffle, index) => {
        if (index === raffleIndex)
          return {
            title: title === null ? raffle.title : title,
            data: data || raffle.data,
            ticketsSold: ticketsSold || raffle.ticketsSold,
          };
        return raffle;
      })
    );
  };

  const addRaffle = (title, data, ticketsSold) => {
    setRaffles((currentState) => [
      ...currentState,
      { title, data, ticketsSold },
    ]);
  };

  return (
    <raffleContext.Provider
      value={{ raffles, addRaffle, updateRaffle, raffle, setRaffle }}>
      {children}
    </raffleContext.Provider>
  );
};
