import { useParams, Link, useNavigate } from 'react-router-dom';

function LocationDetail({ locations, deleteLocation }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((loc) => loc.id === Number(id));

  if (!location) {
    return <p className="p-8 text-gray-500">Location not found.</p>;
  }

  function handleDelete() {
    deleteLocation(location.id);
    navigate('/dashboard');
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Location: {location.label} ({location.city_name})
        </h1>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 flex flex-col sm:flex-row gap-6 sm:gap-16">
        <p className="text-3xl font-bold text-gray-800">{location.weather}</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Humidity: 60%</p>
          <p>Wind: 12 km/h</p>
          <p>UV Index: 7</p>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>High: 32°C</p>
          <p>Low: 24°C</p>
          <p>Precipitation: 0%</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-3 mb-8">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={day} className="border border-gray-200 rounded-lg p-3 text-center bg-white">
            <p className="font-semibold text-sm text-gray-800">{day}</p>
            <p className="text-xs text-gray-500 mt-2">{28 + i}° / {22 + i}°</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/trips/new"
          className="bg-blue-500 text-white text-sm px-5 py-3 rounded hover:bg-blue-600 text-center"
        >
          + Plan a Trip Here
        </Link>
        <button
          onClick={handleDelete}
          className="border border-gray-300 text-gray-600 text-sm px-5 py-3 rounded hover:bg-gray-50"
        >
          Remove Location
        </button>
      </div>
    </div>
  );
}

export default LocationDetail;