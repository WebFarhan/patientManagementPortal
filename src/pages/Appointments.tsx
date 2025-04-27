import React, { useState } from 'react';
import { Calendar, Clock, Search, Filter, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { patients } from '../data/mockData';

// Gather all appointments from all patients
const allAppointments = patients.flatMap(patient => 
  patient.appointments.map(appointment => ({
    ...appointment,
    patientId: patient.id,
    patientName: patient.name,
    patientAvatar: patient.avatar
  }))
);

const Appointments: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter appointments based on search term and selected date
  const filteredAppointments = allAppointments.filter(appointment => {
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDate = selectedDate === 'all' || appointment.date === selectedDate;
    
    return matchesSearch && matchesDate;
  });
  
  // Group appointments by date
  const appointmentsByDate = filteredAppointments.reduce((groups, appointment) => {
    if (!groups[appointment.date]) {
      groups[appointment.date] = [];
    }
    groups[appointment.date].push(appointment);
    return groups;
  }, {} as Record<string, typeof filteredAppointments>);
  
  // Sort dates
  const sortedDates = Object.keys(appointmentsByDate).sort((a, b) => {
    const dateA = new Date(a.split('/').reverse().join('-'));
    const dateB = new Date(b.split('/').reverse().join('-'));
    return dateA.getTime() - dateB.getTime();
  });
  
  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Appointments</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
          <Plus size={18} className="mr-2" />
          Schedule Appointment
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Dates</option>
                {Array.from(new Set(allAppointments.map(a => a.date))).map(date => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          {sortedDates.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No appointments found</p>
            </div>
          ) : (
            <div className="space-y-8">
              {sortedDates.map(date => (
                <div key={date}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Calendar size={20} className="mr-2 text-blue-600" />
                    {date}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {appointmentsByDate[date].map((appointment, index) => (
                      <div 
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between mb-3">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                            appointment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {appointment.status}
                          </span>
                          <div className="flex items-center text-gray-500">
                            <Clock size={14} className="mr-1" />
                            <span className="text-sm">{appointment.time}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-medium text-gray-900 mb-2">{appointment.reason}</h4>
                        
                        <div className="flex items-center mb-3">
                          <div className="h-8 w-8 rounded-full overflow-hidden mr-2">
                            <img 
                              src={appointment.patientAvatar} 
                              alt={appointment.patientName} 
                              className="h-full w-full object-cover" 
                            />
                          </div>
                          <Link 
                            to={`/patients/${appointment.patientId}`}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            {appointment.patientName}
                          </Link>
                        </div>
                        
                        <div className="text-sm text-gray-500">
                          <span>Dr. {appointment.doctor}</span>
                          {appointment.room && (
                            <>
                              <span className="mx-1">•</span>
                              <span>Room {appointment.room}</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;