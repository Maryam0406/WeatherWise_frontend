import { Link } from 'react-router-dom';
import { mockUser, mockLocations, mockTrips, mockForecast } from '../data/mockData';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

function Dashboard() {
  return (
    <div className="p-8">
      {/* Top bar */}
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

      {/* Trips */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">My Trips</h2>
        <Link
          to="/trips/new"
          className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-200"
        >
          + New Trip
        </Link>
      </div>
      <div className="flex flex-col gap-3 mb-8">
        {mockTrips.map((trip) => {
          const packedCount = trip.packingItems.filter((p) => p.is_packed).length;
          return (
            <Link
              key={trip.id}
              to={`/trips/${trip.id}`}
              className="bg-green-50 border border-green-100 rounded-lg p-4 hover:shadow-md transition flex justify-between"
            >
              <span className="font-medium text-gray-800">{trip.name}</span>
              <span className="text-sm text-gray-500">
                {trip.start_date} - {trip.end_date} | Packing: {packedCount}/{trip.packingItems.length}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Chart placeholder */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">7-Day Trend — Home Location</h2>
      <div className="border border-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-400 bg-white">
        <Line
          data={{
            labels: mockForecast.map((f) => f.day),
            datasets: [
              {
                label: 'Temperature (°C)',
                data: mockForecast.map((f) => f.temp),
                borderColor: '#4A90D9',
                backgroundColor: '4A90D9',
                tension: 0.3,
              },
            ],
          }}

          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />  
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
}

export default Dashboard;