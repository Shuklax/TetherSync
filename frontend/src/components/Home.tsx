import { Bot, FileText, MessageSquare, Shield, Users, Zap } from "lucide-react";
import { Card } from "./Card";

function Home() {
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
      <div
        id="body"
        className="flex flex-col items-center justify-center bg-black"
      >
        <div className="text-white text-center mt-15">
          <p className="text-4xl font-bold mb-5">
            Connect, Chat, and Collaorate in Real-Time
          </p>
          <p className="text-[130%] opacity-50 mb-9">
            TetherSync an a comprehensive chat aplication with advanced features{" "}
            <br /> like file sharing, end-to-end encryption, and powerful
            moderation tools
          </p>
          <button className="bg-green-400 text-black font-semibold p-2 px-4 rounded-lg cursor-pointer hover:bg-green-600">
            Start Chatting Now
          </button>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 mt-20 px-40 mb-10">
          <Card
            icon={MessageSquare}
            heading={"Real-Time Messaging"}
            content={
              "Instant messaging with typing indicators, read receipts, and emoji reactions"
            }
          />
          <Card
            icon={FileText}
            heading={"File Sharing"}
            content={
              "Share images, documents, and media files with drag-and-drop simplicity"
            }
          />
          <Card
            icon={Shield}
            heading={"End-to-End encryption"}
            content={
              "Your conversations are protected with military-grade encryption"
            }
          />
          <Card
            icon={Users}
            heading={"Role-Based Access"}
            content={
              "Flexible user roles with admin, moderator, and user permissions"
            }
          />
          <Card
            icon={Bot}
            heading={"AI Integration"}
            content={
              "Smart chatbots and AI-powered features to enhance your experience"
            }
          />
          <Card
            icon={Zap}
            heading={"Lightning Fast"}
            content={
              "Optimized performance with real-time updates and minimal latency"
            }
          />
        </div>

        <div className="mt-10 bg-[#0b0b0b] rounded-2xl border-1 border-emerald-800 flex flex-col items-center justify-center w-2xl p-8 mb-15 text-center">
          <div id="title" className=" pb-2 text-2xl text-white font-semibold">
            Ready to Get Started?
          </div>
          <div id="description" className="text-white opacity-50 text-[20px] ">
            Join thousands of users already using TetherSync for their
            communication needs
          </div>
          <div id="cta" className="pt-5 mt-2">
            <button className="bg-green-400 px-7 py-3 rounded-lg font-semibold cursor-pointer hover:bg-green-600">
              Create Your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
