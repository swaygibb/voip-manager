import userProfileIcon from "../assets/user-profile.svg";

const UserProfile = () => {
  return (
    <div className="bg-[#D9D9D9] p-6 rounded-lg shadow-lg w-1/2">
      <div className="flex justify-center mb-4">
        <img src={userProfileIcon} alt="User Profile" className="h-60 w-60" />
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">User Profile</h3>
        <p className="text-sm text-gray-500 text-right">
          123 Fake Street <br />
          Fargo, ND 58103
        </p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center border-b py-2">
          <label className="text-sm text-gray-700">Name</label>
          <input
            type="text"
            className="w-1/2 border-none outline-none text-sm text-gray-600"
            placeholder="Enter name"
            value="Sam Smith"
          />
        </div>
        <div className="flex justify-between items-center border-b py-2 mt-4">
          <label className="text-sm text-gray-700">Phone Number</label>
          <input
            type="text"
            className="w-1/2 border-none outline-none text-sm text-gray-600"
            placeholder="Enter phone number"
            value="1-701-555-1234"
          />
        </div>
        <div className="mt-4 border-b py-2">
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border-none outline-none text-sm text-gray-600"
            placeholder="Enter email"
            value="sam.smith@testcompanyemail.com"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-700 transition duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
