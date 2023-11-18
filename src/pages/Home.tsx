import Main from "@src/components/Main";
import Sidebar from "@src/components/Sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[300px_1fr]">
      <div className="bg-[#f6f5f4] py-2">
        <Sidebar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}
