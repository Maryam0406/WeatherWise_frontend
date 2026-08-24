import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    onLogin();
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="bg-slate-800 text-white flex flex-col items-center justify-center p-10 md:w-1/2">
        <h1 className="text-3xl font-bold mb-2">WeatherWise</h1>
        <p className="text-slate-300 text-sm">Plan smarter. Pack better.</p>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>

          <div className="flex gap-4 mb-2 text-sm">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={mode === 'login' ? 'font-bold text-blue-500' : 'text-gray-400'}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={mode === 'signup' ? 'font-bold text-blue-500' : 'text-gray-400'}
            >
              Sign Up
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3" role="alert">
              {error}
            </p>
          )}

          {mode === 'signup' && (
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {mode === 'signup' && (
            <fieldset>
              <legend className="block text-sm font-semibold text-gray-600 mb-1">Role</legend>
              <label className="mr-4 text-sm">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={formData.role === 'user'}
                  onChange={handleChange}
                  className="mr-1"
                />
                User
              </label>
              <label className="text-sm">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleChange}
                  className="mr-1"
                />
                Admin
              </label>
            </fieldset>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold text-sm py-3 rounded hover:bg-blue-600 mt-2"
          >
            {mode === 'login' ? 'LOG IN' : 'CREATE ACCOUNT'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;