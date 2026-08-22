import { useParams, Link } from 'react-router-dom';
import { mockLocations } from '../data/mockData';


function LocationDetail() {
  const { id } = useParams();
  const location = mockLocations.find((loc) => loc.id ===Number(id));

  if (!location) {
    return <p className="p-8 text-gray-500">Location not found</p>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">
          Location: {location.label} ({location.city_name})
        </h1>
      </div>
    </div>

export default LocationDetail;