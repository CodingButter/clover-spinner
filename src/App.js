import { Outlet } from "react-router";
function App() {
  return (
    <div className="w-full h-full flex items-center flex-col bg-sky-800">
      <Outlet />
    </div>
  );
}

export default App;
