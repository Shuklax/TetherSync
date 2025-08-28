import { MessageSquare } from "lucide-react";

function Dashboard() {
  return (
    <div>
      <div
        id="header"
        className="flex justify-around z-100 bg-[#0b0b0b] h-18 border-1 border-b-emerald-800"
      >
        <div className="flex mt-4">
          <MessageSquare className="text-[#00aa72] h-6 w-6 mt-1.5 mr-2" />
          <h3 className="text-white font-bold text-[140%]">TetherSync</h3>
        </div>
        <div className="flex space-x-20 md:space-x-60 text-[#0b0b0b]">
          <div>Middle left</div>
          <div>Middle right</div>
        </div>
        <div className="mt-4">
          <button className="bg-green-400 p-2 rounded-lg font-semibold px-4 cursor-pointer hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
