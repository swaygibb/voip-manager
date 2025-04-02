import totalCallsIcon from "../assets/total-calls.svg";
import callsAnsweredIcon from "../assets/calls-answered.svg";
import callsMissedIcon from "../assets/calls-missed.svg";
import callsReturnedIcon from "../assets/calls-returned.svg";

const CalllogOverview = () => {
  return (
    <div className="bg-[#D9D9D9] p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Call Log Overview</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-2">
          <img src={totalCallsIcon} alt="Total Calls" className="h-10 w-10" />
          <div>
            <h4 className="text-lg text-gray-600">Total Calls</h4>
            <p className="text-6xl font-bold">102</p>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="text-right">
            <h4 className="text-lg text-gray-600">Calls Answered</h4>
            <p className="text-6xl font-bold">88</p>
          </div>
          <img
            src={callsAnsweredIcon}
            alt="Calls Answered"
            className="h-10 w-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <img src={callsMissedIcon} alt="Calls Missed" className="h-10 w-10" />
          <div>
            <h4 className="text-lg text-gray-600">Calls Missed</h4>
            <p className="text-6xl font-bold">12</p>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="text-right">
            <h4 className="text-lg text-gray-600">Calls Returned</h4>
            <p className="text-6xl font-bold">76</p>
          </div>
          <img
            src={callsReturnedIcon}
            alt="Calls Returned"
            className="h-10 w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default CalllogOverview;
