// src/pages/LocationDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { mockLocations } from '../data/mockData';

function LocationDetail() {
  const { id } = useParams();
  const location = mockLocations.find((loc) => loc.id === Number(id));

  if (!location) {
    return <p className="p-8 text-gray-500">Location not found.</p>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">
          Location: {location.label} ({location.city_name})
        </h1>
      </div>

      {/* Current conditions */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8 flex gap-16">
        <div>
          <p className="text-3xl font-bold text-gray-800">{location.weather}</p>
        </div>
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

      {/* 7-day forecast */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
      <div className="grid grid-cols-7 gap-3 mb-8">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={day} className="border border-gray-200 rounded-lg p-3 text-center bg-white">
            <p className="font-semibold text-sm text-gray-800">{day}</p>
            <p className="text-xs text-gray-500 mt-2">{28 + i}° / {22 + i}°</p>
          </div>
        ))}
      </div>



export default LocationDetail;