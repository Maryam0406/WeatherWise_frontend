import { useState } from 'react';

const [formData, setFormData] = useState({
    name: '',
    location_id: '',
    start_date: '',
    end_date: '',
    notes: '',
  });

  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

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
        id="StartData"
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
