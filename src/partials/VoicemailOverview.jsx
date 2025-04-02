import voicemailsDeletedIcon from "../assets/voicemails-deleted.svg";
import totalListenedIcon from "../assets/total-listened.svg";
import totalVoicemeilsIcon from "../assets/total-voicemails.svg";
import callsReturnedIcon from "../assets/calls-returned.svg";

const VoicemailOverview = () => {
  return (
    <div className="bg-[#D9D9D9] p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Voicemail Overview</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center gap-2">
          <img
            src={totalVoicemeilsIcon}
            alt="Total Voicemails"
            className="h-10 w-10"
          />
          <div>
            <h4 className="text-lg text-gray-600">Total Voicemails</h4>
            <p className="text-6xl font-bold">102</p>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="text-right">
            <h4 className="text-lg text-gray-600">Total Listened</h4>
            <p className="text-6xl font-bold">88</p>
          </div>
          <img
            src={totalListenedIcon}
            alt="Total Listened"
            className="h-10 w-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <img
            src={voicemailsDeletedIcon}
            alt="Voicemails Deleted"
            className="h-10 w-10"
          />
          <div>
            <h4 className="text-lg text-gray-600">Voicemails Deleted</h4>
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

export default VoicemailOverview;
