import { Outlet } from "react-router";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url("images/cloverbackground.png")`,
        backgroundSize: "cover",
      }}
      className="w-full h-full flex rounded-3xl overflow-hidden items-center flex-col bg-sky-800">
      <Outlet />
    </div>
  );
}

export default App;
