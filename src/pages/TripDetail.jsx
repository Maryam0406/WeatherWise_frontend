import { useParams } from 'react-router-dom';

//{ trip } - receives trips from another component
function TripDetail({ trips, togglePackingItem }) {
  const { id } = useParams();
  //trips comes from app.jsx, which is passed down to this component. We use the id from the URL to find the specific trip in the trips array.
  //Number(id) - from the url param which is a string
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return <p className="p-8 text-gray-500">Trip not found</p>
  }

  const packedCount = trip.packingItems.filter((item) => item.is_packed).length;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Trip: {trip.name}</h1>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <p className="font-semibold text-gray-800">
          {trip.start_date} - {trip.end_date}
        </p>
        <p className="text-sm text-gray-500 mt-1">{trip.forecast_summary}</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Packing List</h2>
        <p className="text-sm text-gray-500">
          {packedCount} of {trip.packingItems.length} packed
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        {trip.packingItems.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3"
          >
            <span className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={item.is_packed}
                onChange={() => togglePackingItem(trip.id, item.id)}
                className="w-4 h-4"
              />
              <span className={item.is_packed ? 'line-through text-gray-400' : 'text-gray-800'}>
                {item.item_name}
              </span>
            </span>
            <span className="text-xs text-gray-400">
              {item.is_suggested ? 'Suggested' : 'Custom'}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default TripDetail;