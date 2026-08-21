import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div className="p-8">
      {/*Top Bar*/}
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Hi, {mockUser.name} ({mockUser.role})
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatCard label="Saved Locations" value={mockLocations.length} />
        <StatCard label="Upcoming Trips" value={mockTrips.length} />
        <StatCard label="Home Now" value={mockLocations[0]?.weather ?? '—'} />
        <StatCard label="Role" value={mockUser.role} />
      </div>

      {/* Saved Locations */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">My Saved Locations</h2>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
          + Add Location
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {mockLocations.map((loc) => (
          <Link
            key={loc.id}
            to={`/locations/${loc.id}`}
            className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition"
          >
            <h3 className="font-bold text-gray-800">{loc.label}</h3>
            <p className="text-sm text-gray-500">{loc.city_name}</p>
            <p className="text-sm text-blue-500 mt-1">{loc.weather}</p>
          </Link>
        ))}
      </div>

export default Dashboard;