import { useParams } from 'react-router-dom';

//{ trip } - receives trips from another component
function TripDetail({ trips }) {
  const { id } = useParams();
  //trips comes from app.jsx, which is passed down to this component. We use the id from the URL to find the specific trip in the trips array.
  //Number(id) - from the url param which is a string
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return <p className="p-8 text-gray-500">Trip not found</p>
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">Trip: {trip.name}</h1>
      </div>

      < div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <p className="font-semibold text-gray-800">
          {trip.start_date} - {trip.end_date}
        </p>
        <p className="text-sm text-gray-500 mt-1">{trip.forecast_summary}</p>
        </div>
    </div>
  );
}

export default TripDetail;