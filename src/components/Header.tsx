import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={20} className="text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
            </div>
            
            <div className="relative">
              <button className="w-10 h-10 overflow-hidden rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
                    {user?.name.charAt(0)}
                  </div>
                )}
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;