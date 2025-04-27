import React from 'react';
import { Calendar, Users, Activity, Clock, ArrowUp, ArrowDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}</h1>
        <p className="text-gray-500">Here's what's happening with your patients today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Stats Cards */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Patients</p>
              <h3 className="text-xl font-bold text-gray-800">1,482</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <ArrowUp size={14} />
            <span className="text-xs font-medium ml-1">3.2% from last month</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Appointments Today</p>
              <h3 className="text-xl font-bold text-gray-800">42</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <ArrowUp size={14} />
            <span className="text-xs font-medium ml-1">12% from yesterday</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
              <Activity size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Critical Patients</p>
              <h3 className="text-xl font-bold text-gray-800">8</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-red-600">
            <ArrowUp size={14} />
            <span className="text-xs font-medium ml-1">2 more than yesterday</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Avg. Wait Time</p>
              <h3 className="text-xl font-bold text-gray-800">18 min</h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-red-600">
            <ArrowDown size={14} />
            <span className="text-xs font-medium ml-1">4 min better than last week</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Patient Activity</h3>
            <select className="border border-gray-300 rounded-md text-sm p-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between px-2">
            {/* Simplified chart bars */}
            {[35, 55, 62, 45, 48, 70, 85].map((height, index) => (
              <div key={index} className="w-1/12 flex flex-col items-center">
                <div 
                  className="w-full bg-blue-500 rounded-t-md transition-all duration-500"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Patients */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Recent Patients</h3>
          <div className="space-y-4">
            {[
              { name: 'Emily Johnson', time: '9:30 AM', status: 'Checked In', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Michael Smith', time: '10:15 AM', status: 'In Progress', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
              { name: 'Sarah Davis', time: '11:00 AM', status: 'Waiting', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
              { name: 'Robert Wilson', time: '11:45 AM', status: 'Completed', avatar: 'https://randomuser.me/api/portraits/men/29.jpg' },
            ].map((patient, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800">{patient.name}</h4>
                  <p className="text-xs text-gray-500">{patient.time}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  patient.status === 'Checked In' ? 'bg-blue-100 text-blue-700' :
                  patient.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                  patient.status === 'Waiting' ? 'bg-gray-100 text-gray-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {patient.status}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800">
            View all patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;