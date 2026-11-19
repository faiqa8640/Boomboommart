import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authModalTab, setAuthModalTab, login, register } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (authModalTab === 'login') {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
      closeAuthModal();
      setEmail('');
      setPassword('');
      setName('');
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Modal Header Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => { setAuthModalTab('login'); setError(''); }}
            className={`flex-1 py-4 text-center text-sm font-semibold tracking-wide uppercase transition-colors relative ${
              authModalTab === 'login'
                ? 'text-[#007bc4]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Sign In
            {authModalTab === 'login' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007bc4]" />
            )}
          </button>
          <button
            onClick={() => { setAuthModalTab('register'); setError(''); }}
            className={`flex-1 py-4 text-center text-sm font-semibold tracking-wide uppercase transition-colors relative ${
              authModalTab === 'register'
                ? 'text-[#007bc4]'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Create an Account
            {authModalTab === 'register' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#007bc4]" />
            )}
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {authModalTab === 'register' && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded focus:border-[#007bc4] focus:ring-1 focus:ring-[#007bc4] outline-none transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                Username or Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded focus:border-[#007bc4] focus:ring-1 focus:ring-[#007bc4] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded focus:border-[#007bc4] focus:ring-1 focus:ring-[#007bc4] outline-none transition-all"
                />
              </div>
            </div>

            {authModalTab === 'login' ? (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center space-x-2 cursor-pointer text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-[#007bc4] focus:ring-[#007bc4]"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="text-[#007bc4] hover:underline">
                  Lost your password?
                </a>
              </div>
            ) : (
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 bg-[#007bc4] hover:bg-[#006aa8] text-white font-semibold rounded-full uppercase text-xs tracking-wider transition-all duration-200 shadow-sm active:scale-[0.99] disabled:opacity-50"
            >
              {loading
                ? 'Processing...'
                : authModalTab === 'login'
                ? 'Log In'
                : 'Register'}
            </button>
          </form>

          {/* Social login / notice */}
          <div className="mt-6 text-center text-xs text-gray-500">
            {authModalTab === 'login' ? (
              <span>
                Don't have an account yet?{' '}
                <button
                  type="button"
                  onClick={() => setAuthModalTab('register')}
                  className="text-[#007bc4] font-semibold hover:underline"
                >
                  Create an Account
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthModalTab('login')}
                  className="text-[#007bc4] font-semibold hover:underline"
                >
                  Sign In
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
