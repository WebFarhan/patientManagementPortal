import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings as SettingsIcon,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  
  return (
    <aside className="hidden md:flex flex-col w-64 bg-blue-800 text-white">
      <div className="px-6 py-5">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
          <h1 className="ml-3 text-xl font-bold">MedCare</h1>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-3 space-y-1">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`
              }
              end
            >
              <LayoutDashboard size={20} className="mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/patients" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`
              }
            >
              <Users size={20} className="mr-3" />
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/appointments" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`
              }
            >
              <Calendar size={20} className="mr-3" />
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reports" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`
              }
            >
              <FileText size={20} className="mr-3" />
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/settings" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
                }`
              }
            >
              <SettingsIcon size={20} className="mr-3" />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-blue-700">
        <button 
          onClick={logout}
          className="flex items-center w-full px-3 py-2 text-blue-100 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;