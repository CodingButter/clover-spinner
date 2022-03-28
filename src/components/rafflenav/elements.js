import classNames from "classnames";
export const TabBar = ({ children }) => {
  return (
    <ul className="flex flex-row flex-nowrap p-2 w-full justify-center">
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
          style={{ background: selected ? "#e3972a" : "#e3662a" }}
          className={classNames(
            `text-white text-3xl p-4 rounded-lg shadow-md
          ${!editable && "rounded-sm"}`,
            className
          )}
          onClick={onClick}>
          {text}
        </button>
      ) : (
        <input
          style={{ background: selected ? "#e3972a" : "#e3662a" }}
          onChange={({ target }) => updateLabel(target.value)}
          value={text}
          className={classNames(
            `text-white text-2xl p-2 rounded-l-sm shadow-sm`,
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
        <span
          style={{ background: selected ? "#e3972a" : "#e3662a" }}
          className="p-2 flex justify-center items-center rounded-r-sm text-white">
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
      className={`absolute right-5 ${edit ? `top-50` : `top-5`} ${
        !edit && "opacity-0 hover:opacity-100"
      }`}
      onClick={toggleEdit}
      text={!edit ? "Edit" : "Save"}
    />
  );
};
