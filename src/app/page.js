import Dropdown from "../components/Dropdown";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
      <div className="nav-area">
        <Dropdown />
      </div>
    </div>
  );
}
