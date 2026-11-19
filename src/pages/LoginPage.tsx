import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password);
    setLoading(false);
    navigate('/');
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-4 font-body flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="text-center">
          <h1 className="font-heading font-extrabold text-2xl text-gray-900 mb-1">
            Sign In to Boom Boom Mart
          </h1>
          <p className="text-xs text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
              Username or Email *
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 text-xs border border-gray-300 rounded outline-none focus:border-[#007bc4]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#007bc4] hover:bg-[#006aa8] text-white font-bold rounded-full uppercase text-xs tracking-wider transition-all shadow-sm active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Log In'}
          </button>
        </form>

        <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span>Don't have an account yet? </span>
          <Link to="/register" className="text-[#007bc4] font-semibold hover:underline">
            Register now
          </Link>
        </div>
      </div>
    </div>
  );
};
