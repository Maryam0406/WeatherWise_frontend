import { useState } from 'react';
import { useParams } from 'react-router-dom';

function TripDetail({
  trips,
  togglePackingItem,
  addPackingItem,
  deletePackingItem,
  addActivity,
  deleteActivity,
}) {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === Number(id));

  const [newItemName, setNewItemName] = useState('');
  const [newActivityName, setNewActivityName] = useState('');
  const [newActivityDate, setNewActivityDate] = useState('');

  if (!trip) {
    return <p className="p-8 text-gray-500">Trip not found</p>;
  }

  const packedCount = trip.packingItems.filter((item) => item.is_packed).length;

  function handleAddItem(e) {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addPackingItem(trip.id, newItemName.trim());
    setNewItemName('');
  }

  function handleAddActivity(e) {
    e.preventDefault();
    if (!newActivityName.trim() || !newActivityDate) return;
    addActivity(trip.id, newActivityName.trim(), newActivityDate);
    setNewActivityName('');
    setNewActivityDate('');
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Trip: {trip.name}</h1>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <p className="font-semibold text-gray-800">
          {trip.start_date} - {trip.end_date}
        </p>
        <p className="text-sm text-gray-500 mt-1">{trip.forecast_summary}</p>
      </div>

      {/* Packing List */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Packing List</h2>
        <p className="text-sm text-gray-500">
          {packedCount} of {trip.packingItems.length} packed
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        {trip.packingItems.length === 0 && (
          <p className="text-sm text-gray-400">No packing items yet.</p>
        )}
        {trip.packingItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3"
          >
            <label className="flex items-center gap-3 flex-1 cursor-pointer">
              <input
                type="checkbox"
                checked={item.is_packed}
                onChange={() => togglePackingItem(trip.id, item.id)}
                className="w-4 h-4"
              />
              <span className={item.is_packed ? 'line-through text-gray-400' : 'text-gray-800'}>
                {item.item_name}
              </span>
              <span className="text-xs text-gray-400 ml-auto mr-3">
                {item.is_suggested ? 'Suggested' : 'Custom'}
              </span>
            </label>
            <button
              onClick={() => deletePackingItem(trip.id, item.id)}
              aria-label={`Delete ${item.item_name}`}
              className="text-xs border border-red-200 text-red-500 px-2 py-1 rounded hover:bg-red-50"
            >
              Del
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddItem} className="flex gap-2 mb-8">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add a packing item..."
          aria-label="New packing item name"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded hover:bg-blue-200"
        >
          + Add Item
        </button>
      </form>

      {/* Activities */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Activities</h2>
      <div className="flex flex-col gap-2 mb-4">
        {trip.activities.length === 0 && (
          <p className="text-sm text-gray-400">No activities planned yet.</p>
        )}
        {trip.activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between bg-green-50 border border-green-100 rounded-lg p-3"
          >
            <span className="text-sm text-gray-800">
              {new Date(activity.scheduled_date).toLocaleString()} — {activity.activity_name}
            </span>
            <button
              onClick={() => deleteActivity(trip.id, activity.id)}
              aria-label={`Delete ${activity.activity_name}`}
              className="text-xs border border-red-200 text-red-500 px-2 py-1 rounded hover:bg-red-50"
            >
              Del
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleAddActivity} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newActivityName}
          onChange={(e) => setNewActivityName(e.target.value)}
          placeholder="Activity name..."
          aria-label="New activity name"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
        />
        <input
          type="datetime-local"
          value={newActivityDate}
          onChange={(e) => setNewActivityDate(e.target.value)}
          aria-label="Activity date and time"
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        />
        <button
          type="submit"
          className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded hover:bg-green-200"
        >
          + Add Activity
        </button>
      </form>
    </div>
  );
}

export default TripDetail;