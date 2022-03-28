import { useEffect, useState } from "react";
import { useRaffleManager } from "../../providers/RaffleProvider";
import { TabBar, Tab, Plus, Edit } from "./elements";
import fileDialog from "file-dialog";
import csv from "csvtojson";
const Tabs = ({ Reset }) => {
  const { raffles, addRaffle, setRaffle, updateRaffle } = useRaffleManager();
  const [raffleIndex, setRaffleIndex] = useState(0);
  const [edit, setEdit] = useState(false);
  const [updated, setUpdated] = useState(false);
  const toggleUpdated = () => {
    setUpdated(!updated);
  };
  const toggleEdit = () => {
    setEdit((state) => !state);
  };

  const createRaffle = () => {
    addRaffle("New Raffle", [], 0);
  };
  const selectRaffle = (index) => {
    setRaffleIndex(index);
    setRaffle(raffles[index]);
    Reset();
  };

  const updateLabel = (label) => {
    updateRaffle(raffleIndex, label);
  };

  const updateData = (data, ticketsSold) => {
    updateRaffle(raffleIndex, null, data, ticketsSold);
    setRaffle(raffles[raffleIndex]);
  };
  const runFileDialog = () => {
    fileDialog({ accept: "text/csv" }).then((files) => {
      const reader = new FileReader();
      reader.readAsText(files[0]);
      reader.onload = function () {
        csv({
          noheader: false,
          output: "csv",
        })
          .fromString(reader.result)
          .then((csvRow) => {
            const results = csvRow.map((row) => ({
              name: row[3],
              ticket: row[1],
            }));
            var fullArray = [];
            results.forEach(({ name, ticket }, index) => {
              fullArray[ticket] = name;
            });
            for (let i = 1; i < fullArray.length; i++) {
              const name = fullArray[i];
              if (!name) fullArray[i] = "Not Sold";
            }
            updateData(fullArray, results.length - 1);
          });
      };
    });
  };
  const handleCreateRaffle = () => {
    createRaffle();
    toggleUpdated();
  };
  useEffect(() => {
    selectRaffle(raffles.length - 1);
  }, [updated]);

  return (
    <>
      <TabBar>
        {raffles.map(({ title, ticketsSold }, index) => {
          return (
            <Tab
              updateLabel={updateLabel}
              runFileDialog={runFileDialog}
              index={index}
              editable={edit && index === raffleIndex}
              onClick={() => selectRaffle(index)}
              selected={index === raffleIndex}
              key={index}
              text={title}
              ticketsSold={ticketsSold}
            />
          );
        })}
      </TabBar>
      <TabBar>
        {(edit || raffles.length == 0) && (
          <Plus addRaffle={handleCreateRaffle} />
        )}
        <Edit toggleEdit={toggleEdit} edit={edit} />
      </TabBar>
    </>
  );
};

export default Tabs;
