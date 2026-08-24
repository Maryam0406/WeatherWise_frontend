import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLocations } from '../data/mockData';

function NewTrip({ locations, addTrip }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    locationId: '',
    startDate: '',
    endDate: '',
    notes: '',
  });

  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.locationId || !formData.startDate || !formData.endDate) {
      setError('Please fill in all required fields.');
      return;
    }
    if (formData.endDate < formData.startDate) {
      setError('End date must be after start date.');
      return;
    }

    setError('');

    const newTrip = {
      id: Date.now(),
      name: formData.name,
      location_id: Number(formData.locationId),
      start_date: formData.startDate,
      end_date: formData.endDate,
      notes: formData.notes,
      packingItems: [],
      activities: [],
    };

    addTrip(newTrip);
    navigate('/dashboard');
  }

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
        Plan a New Trip
      </h1>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-5">
        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3" role="alert">
            {error}
          </p>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
            Trip Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Weekend in Kandy"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label htmlFor="locationId" className="block text-sm font-semibold text-gray-600 mb-1">
            Saved Location
          </label>
          <select
            id="locationId"
            name="locationId"
            value={formData.locationId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          >
            <option value="">Select a location...</option>
            {mockLocations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.label} ({loc.city_name})
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="startDate" className="block text-sm font-semibold text-gray-600 mb-1">
              Start Date
            </label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block text-sm font-semibold text-gray-600 mb-1">
              End Date
            </label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-semibold text-gray-600 mb-1">
            Notes (optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold text-sm py-3 rounded hover:bg-blue-600"
        >
          CREATE TRIP
        </button>
      </form>
    </div>
  );
}

export default NewTrip;