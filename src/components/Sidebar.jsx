import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Locations', path: '/locations/1' },
  { label: 'Trips', path: '/dashboard' },
  { label: 'Profile', path: '/dashboard' },
];

function Sidebar() {
  return (
    <aside className="w-full md:w-56 bg-slate-800 text-white p-4 flex flex-col md:min-h-screen">
      <h1 className="text-xl font-bold mb-1">WeatherWise</h1>
      <p className="text-xs text-slate-400 mb-8">Trip planning</p>

      <nav className="flex flex-col gap-1" aria-label="Main Navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded text-sm ${
                isActive ? 'bg-slate-600 font-semibold' : 'text-slate-300 hover:bg-slate-700'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="mt-auto text-sm text-slate-300 hover:text-white text-left px-3 py-2"
        onClick={() => alert('Logout clicked — will connect to real auth in Week 4')}
      >
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;