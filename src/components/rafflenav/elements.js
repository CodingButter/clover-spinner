import classNames from "classnames";
export const TabBar = ({ children }) => {
  return (
    <ul className="flex flex-row space-x-7 p-5 bg-gray-700 w-full justify-center shadow-md">
      {children}
    </ul>
  );
};

export const Tab = ({
  editable,
  selected,
  onClick,
  className,
  index,
  text,
  updateLabel,
  runFileDialog,
  ticketsSold,
}) => {
  return (
    <li className="flex flex-row">
      {!editable ? (
        <button
          className={classNames(
            `${
              selected ? "bg-orange-400" : "bg-orange-600"
            } text-white text-xl p-2 rounded-l-sm shadow-sm ${
              !editable && "rounded-sm"
            }`,
            className
          )}
          onClick={onClick}>
          {text}
        </button>
      ) : (
        <input
          onChange={({ target }) => updateLabel(target.value)}
          value={text}
          className={classNames(
            `${
              selected ? "bg-orange-400" : "bg-orange-600"
            } text-white text-xl p-2 rounded-l-sm shadow-sm`,
            className
          )}
          onClick={onClick}
        />
      )}
      {editable && (
        <button
          onClick={runFileDialog}
          className="p-2 flex justify-center items-center bg-blue-400 text-white"
          htmlFor={`file-upload-${index}`}>
          CSV
        </button>
      )}
      {editable && (
        <span className="p-2 flex justify-center items-center rounded-r-sm bg-green-600 text-white">
          {ticketsSold}
        </span>
      )}
    </li>
  );
};

export const Plus = ({ addRaffle }) => {
  return <Tab editable={false} onClick={addRaffle} text="+" />;
};

export const Edit = ({ edit, toggleEdit }) => {
  return (
    <Tab
      editable={false}
      className={`absolute right-5 top-5 ${
        !edit && "opacity-0 hover:opacity-100"
      }`}
      onClick={toggleEdit}
      text={!edit ? "Edit" : "Save"}
    />
  );
};
