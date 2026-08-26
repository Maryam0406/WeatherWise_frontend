import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LocationDetail from './pages/LocationDetail';
import NewTrip from './pages/NewTrip';
import TripDetail from './pages/TripDetail';
import { initialLocations, initialTrips } from './data/mockData';
import TripsList from './pages/TripsList';
import Profile from './pages/Profile';
function App() {
  const [locations, setLocations] = useState(initialLocations);
  const [trips, setTrips] = useState(initialTrips);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ---- Trip functions ----
  function addTrip(newTrip) {
    setTrips((prev) => [...prev, newTrip]);
  }

  // ---- Packing item functions ----
  function togglePackingItem(tripId, itemId) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;
        return {
          ...trip,
          packingItems: trip.packingItems.map((item) =>
            item.id === itemId ? { ...item, is_packed: !item.is_packed } : item
          ),
        };
      })
    );
  }

  function addPackingItem(tripId, itemName) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;
        const newItem = {
          id: Date.now(),
          item_name: itemName,
          is_packed: false,
          is_suggested: false,
        };
        return { ...trip, packingItems: [...trip.packingItems, newItem] };
      })
    );
  }

  function deletePackingItem(tripId, itemId) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;
        return {
          ...trip,
          packingItems: trip.packingItems.filter((item) => item.id !== itemId),
        };
      })
    );
  }

  // ---- Activity functions ----
  function addActivity(tripId, activityName, scheduledDate) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;
        const newActivity = {
          id: Date.now(),
          activity_name: activityName,
          scheduled_date: scheduledDate,
        };
        return { ...trip, activities: [...trip.activities, newActivity] };
      })
    );
  }

  function deleteActivity(tripId, activityId) {
    setTrips((prevTrips) =>
      prevTrips.map((trip) => {
        if (trip.id !== tripId) return trip;
        return {
          ...trip,
          activities: trip.activities.filter((a) => a.id !== activityId),
        };
      })
    );
  }

  // ---- Location functions ----
  function addLocation(newLocation) {
    setLocations((prev) => [...prev, newLocation]);
  }

  function deleteLocation(locationId) {
    const isUsed = trips.some((trip) => trip.location_id === locationId);
    if (isUsed) {
      alert("Can't remove this location — it's linked to an existing trip.");
      return;
    }
    setLocations((prev) => prev.filter((loc) => loc.id !== locationId));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        <Route
          path="/dashboard"
          element={
            <AppLayout>
              <Dashboard trips={trips} locations={locations} />
            </AppLayout>
          }
        />
        <Route
          path="/locations/:id"
          element={
            <AppLayout>
              <LocationDetail locations={locations} deleteLocation={deleteLocation} />
            </AppLayout>
          }
        />
        <Route
          path="/trips/new"
          element={
            <AppLayout>
              <NewTrip locations={locations} addTrip={addTrip} />
            </AppLayout>
          }
        />
        <Route
          path="/trips/:id"
          element={
            <AppLayout>
              <TripDetail
                trips={trips}
                togglePackingItem={togglePackingItem}
                addPackingItem={addPackingItem}
                deletePackingItem={deletePackingItem}
                addActivity={addActivity}
                deleteActivity={deleteActivity}
              />
            </AppLayout>
          }
        />

        <Route
          path="/trips"
          element={
            <AppLayout>
              <TripsList trips={trips} />
            </AppLayout>
          }
        />
        
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile locations={locations} trips={trips} />
            </AppLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-gray-50 min-h-screen">{children}</main>
    </div>
  );
}

export default App;