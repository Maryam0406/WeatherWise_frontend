import { Link } from 'react-router-dom';

function TripsList({ trips }) {
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">My Trips</h1>
        <Link
          to="/trips/new"
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
        >
          + New Trip
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {trips.length === 0 && (
          <p className="text-sm text-gray-400">No trips yet — plan your first one!</p>
        )}
        {trips.map((trip) => {
          const packedCount = trip.packingItems.filter((p) => p.is_packed).length;
          return (
            <Link
              key={trip.id}
              to={`/trips/${trip.id}`}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition flex flex-col sm:flex-row sm:justify-between gap-1"
            >
              <span className="font-medium text-gray-800">{trip.name}</span>
              <span className="text-sm text-gray-500">
                {trip.start_date} - {trip.end_date} | Packing: {packedCount}/{trip.packingItems.length}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TripsList;