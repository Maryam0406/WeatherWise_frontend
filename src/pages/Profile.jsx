import { mockUser } from '../data/mockData';

function Profile({ locations, trips }) {
  return (
    <div className="p-4 md:p-8 max-w-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
        My Profile
      </h1>

      <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Full Name</p>
          <p className="text-gray-800 font-medium">{mockUser.name}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
          <p className="text-gray-800 font-medium">{mockUser.email}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Role</p>
          <p className="text-gray-800 font-medium capitalize">{mockUser.role}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Account Stats</p>
          <p className="text-gray-800 font-medium">
            {locations.length} saved locations, {trips.length} trips planned
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;