import { Children } from "react"
import classNames from "classnames"
export const TabBar = ({ children }) => {
  return (
    <ul className={`flex flex-row p-2 w-full justify-start mb-8 gap-2 overflow-x-auto`}>
      {children}
    </ul>
  )
}

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
          style={{ background: selected ? "#e3662a" : "#4570b4" }}
          className={classNames(
            `shadow-lg p-4 py-4 text-white min-w-[125px]
          ${!editable && "rounded-2xl"}`,
            className
          )}
          onClick={onClick}>
          {text}
        </button>
      ) : (
        <div className="flex flex-row w-full absolute top-0 left-0 justify-center p-10 rounded-xl">
          <div className="flex flex-row w-8/12 rounded-3xl bg-white shadow-2xl justify-center p-10">
            <input
              style={{ background: selected ? "#e3662a" : "#e3662a" }}
              onChange={({ target }) => updateLabel(target.value)}
              value={text}
              className={classNames(`text-white text-sm p-2 shadow-sm`, className)}
              onClick={onClick}
            />

            <button
              onClick={runFileDialog}
              className="p-4 flex justify-center items-center bg-blue-400 text-white"
              htmlFor={`file-upload-${index}`}>
              CSV
            </button>
            <span
              style={{ background: selected ? "#e3972a" : "#e3662a" }}
              className="p-4 flex justify-center items-center rounded text-white">
              {ticketsSold}
            </span>
          </div>
        </div>
      )}
    </li>
  )
}

export const Plus = ({ addRaffle }) => {
  return (
    <Tab className="z-50 absolute top-5 left-5" editable={false} onClick={addRaffle} text="+" />
  )
}

export const Edit = ({ edit, toggleEdit }) => {
  return (
    <Tab
      editable={false}
      className={`absolute right-5 top-5 z-50 ${!edit && "opacity-0 hover:opacity-100"}`}
      onClick={toggleEdit}
      text={!edit ? "Edit" : "Save"}
    />
  )
}
