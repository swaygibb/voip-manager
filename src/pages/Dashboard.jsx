import VoicemailOverview from "../partials/VoicemailOverview";
import CalllogOverview from "../partials/CalllogOverview";
import Header from "../partials/Header";
import UserProfile from "../partials/UserProfile";
import Sidebar from "../partials/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6 flex gap-6">
          <UserProfile />

          <div className="flex flex-col gap-6">
            <CalllogOverview />
            <VoicemailOverview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
