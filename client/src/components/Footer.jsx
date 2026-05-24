/**
 * Footer Component
 * Premium footer with links, social media, and newsletter
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800/50 border-t border-gray-700/50 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-white">Prepzo</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your Complete Placement Readiness Ecosystem. Master skills, ace interviews, land your dream job.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600/20 border border-gray-700 hover:border-green-500/50 flex items-center justify-center text-gray-400 hover:text-green-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.41V9.42h2.88V7.04c0-2.86 1.63-4.44 4.32-4.44 1.23 0 2.28.09 2.59.13v3h-1.77c-1.39 0-1.66.66-1.66 1.63v2.13h3.32l-.44 3.37h-2.88V20z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600/20 border border-gray-700 hover:border-green-500/50 flex items-center justify-center text-gray-400 hover:text-green-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-600/20 border border-gray-700 hover:border-green-500/50 flex items-center justify-center text-gray-400 hover:text-green-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 5a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Roadmap</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest placement tips and updates.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 hover:border-green-500/50 focus:border-green-500 focus:outline-none transition"
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-green-700 transition"
              >
                {subscribed ? '✓ Subscribed' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Prepzo. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
