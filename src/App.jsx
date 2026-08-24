import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LocationDetail from './pages/LocationDetail';
import NewTrip from './pages/NewTrip';
import TripDetail from './pages/TripDetail';
import { useState } from 'react';
import { mockLocations, mockTrips } from './data/mockData';

function App() {
  const [locations] = useState(mockLocations);
  const [trips, setTrips] = useState(mockTrips);

  function addTrip(newTrip) {
    setTrips((prev) => [...prev, newTrip]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route
          path="/dashboard" 
          element={<AppLayout><Dashboard trips={trips} locations={locations} /></AppLayout>} />
        <Route
          path="/locations/:id"
          element={<AppLayout><LocationDetail locations={locations} /></AppLayout>} />
        <Route
          path="/trips/new"
          element={<AppLayout><NewTrip locations={locations} addTrip={addTrip} /></AppLayout>} />
        <Route
         path="/trips/:id"
         element={<AppLayout><TripDetail trips={trips} /></AppLayout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
}

export default App;