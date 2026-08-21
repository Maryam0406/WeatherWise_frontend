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

export default Dashboard;