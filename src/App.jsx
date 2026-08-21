import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import LocationDetail from './pages/LocationDetail';
import NewTrip from './pages/NewTrip';
import TripDetail from './pages/TripDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<AppLayout><Dashboard/></AppLayout>} />
        <Route path="/locations" element={<AppLayout><LocationDetail/></AppLayout>} />
        <Route path="/trips/new" element={<AppLayout><NewTrip/></AppLayout>} />
        <Route path="/trips/:id" element={<AppLayout><TripDetail/></AppLayout>} />
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