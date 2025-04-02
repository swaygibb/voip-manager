import searchIcon from "../assets/search.svg";
import alertIcon from "../assets/alert.svg";
import profileIcon from "../assets/profile.svg";
import settingsIcon from "../assets/settings.svg";
import dashboardIcon from "../assets/dashboard.svg";

const Header = () => {
  return (
    <>
      <header className="bg-[#D9D9D9] p-4 flex justify-between items-center border-l border-gray-400 border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-400 px-4 py-2 rounded-xl w-96">
            <img
              src={searchIcon}
              alt="Search"
              className="h-6 w-6 text-gray-600 mr-2"
            />
            <input
              type="text"
              className="w-full border-none outline-none text-sm text-gray-600"
              placeholder="Search anything"
            />
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src={alertIcon}
            alt="Alert"
            className="h-6 w-6 cursor-pointer scale-150"
          />
          <img
            src={profileIcon}
            alt="Profile"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src={settingsIcon}
            alt="Settings"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </header>

      <header className="bg-[#D9D9D9] p-4 flex justify-between items-center border-l border-gray-400">
        <div className="flex items-center gap-2">
          <img src={dashboardIcon} alt="Dashboard Icon" className="h-6 w-6" />
          <h1 className="text-2xl">Dashboard</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
