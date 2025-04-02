import { useState } from "react";
import dashboardIcon from "../assets/dashboard.svg";
import callLogIcon from "../assets/call-log.svg";
import voicemailIcon from "../assets/voicemail.svg";
import settingsIcon from "../assets/settings.svg";
import collapseIcon from "../assets/collapse.svg";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`bg-[#D9D9D9] text-black flex flex-col p-4 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-400">
        <div className="flex items-center gap-2">
          <img src={dashboardIcon} alt="Dashboard Icon" className="h-6 w-6" />
          {!isCollapsed && <h2 className="text-xl font-bold">VOIP Manager</h2>}
        </div>
        <button onClick={toggleSidebar} className="p-1 cursor-pointer">
          <img
            src={collapseIcon}
            alt="Collapse Icon"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <nav className="flex flex-col gap-4">
        <a
          href="#"
          className="group flex items-center gap-2 hover:bg-gray-700 hover:text-white p-2 rounded"
        >
          <img
            src={dashboardIcon}
            alt="Dashboard"
            className="h-6 w-6 group-hover:invert"
          />
          {!isCollapsed && <span>Dashboard</span>}
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 hover:bg-gray-700 hover:text-white p-2 rounded"
        >
          <img
            src={callLogIcon}
            alt="Call Log"
            className="h-6 w-6 group-hover:invert"
          />
          {!isCollapsed && <span>Call Log</span>}
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 hover:bg-gray-700 hover:text-white p-2 rounded"
        >
          <img
            src={voicemailIcon}
            alt="Voicemail"
            className="h-6 w-6 group-hover:invert"
          />
          {!isCollapsed && <span>Voicemail</span>}
        </a>
        <a
          href="#"
          className="group flex items-center gap-2 hover:bg-gray-700 hover:text-white p-2 rounded"
        >
          <img
            src={settingsIcon}
            alt="Settings"
            className="h-6 w-6 group-hover:invert"
          />
          {!isCollapsed && <span>Settings</span>}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
