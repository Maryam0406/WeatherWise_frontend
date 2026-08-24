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
      <h1>{trip.name}</h1>
    </div>
  );
}

export default TripDetail;