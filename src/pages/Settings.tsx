import React from 'react';
import { User, Lock, Bell, Shield, Globe, HelpCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Settings: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-500">Manage your account and application preferences</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-1 border-r border-gray-100">
            <nav className="divide-y divide-gray-100">
              <a href="#profile" className="flex items-center px-4 py-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                <User size={18} className="mr-3" />
                <span className="font-medium">Profile</span>
              </a>
              <a href="#security" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
                <Lock size={18} className="mr-3" />
                <span className="font-medium">Security</span>
              </a>
              <a href="#notifications" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
                <Bell size={18} className="mr-3" />
                <span className="font-medium">Notifications</span>
              </a>
              <a href="#privacy" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
                <Shield size={18} className="mr-3" />
                <span className="font-medium">Privacy</span>
              </a>
              <a href="#language" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
                <Globe size={18} className="mr-3" />
                <span className="font-medium">Language</span>
              </a>
              <a href="#help" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
                <HelpCircle size={18} className="mr-3" />
                <span className="font-medium">Help & Support</span>
              </a>
            </nav>
          </div>
          
          <div className="md:col-span-4 p-6">
            <div id="profile">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Profile Settings</h2>
              
              <div className="flex items-center mb-8">
                <div className="mr-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    {user?.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 text-2xl font-bold">
                        {user?.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold text-lg">{user?.name}</h3>
                  <p className="text-gray-500">{user?.email}</p>
                  <p className="text-gray-500 capitalize">{user?.role}</p>
                  
                  <div className="mt-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm transition-colors mr-2">
                      Change Photo
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue={user?.name.split(' ')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue={user?.name.split(' ')[1] || ''}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={user?.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Role
                    </label>
                    <select
                      id="role"
                      defaultValue={user?.role}
                      disabled
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                    >
                      <option value="admin">Administrator</option>
                      <option value="clinician">Clinician</option>
                    </select>
                    <p className="mt-1 text-xs text-gray-500">Your role cannot be changed. Contact system administrator for role changes.</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm transition-colors mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;