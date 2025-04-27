import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Heart, 
  Thermometer, 
  Droplet, 
  Activity 
} from 'lucide-react';
import { patients } from '../data/mockData';

const PatientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const patient = patients.find(p => p.id === id);
  
  if (!patient) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Not Found</h2>
        <p className="text-gray-600 mb-4">The patient you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/patients" 
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Patients
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link 
            to="/patients" 
            className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Patient Details</h1>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Edit size={16} className="mr-2" />
            Edit
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <Trash2 size={16} className="mr-2" />
            Delete
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img 
                src={patient.avatar} 
                alt={patient.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800">{patient.name}</h2>
            <span className="text-sm text-gray-500 mb-2">{patient.id}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              patient.status === 'Active' ? 'bg-green-100 text-green-800' :
              patient.status === 'Inactive' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {patient.status}
            </span>
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <Phone size={18} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-gray-800">{patient.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail size={18} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-800">{patient.email}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin size={18} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-gray-800">{patient.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar size={18} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                <p className="text-gray-800">{patient.dob}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock size={18} className="text-gray-500 mr-3 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Last Visit</p>
                <p className="text-gray-800">{patient.lastVisit}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Vitals & Medical Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Vital Signs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Heart Rate</p>
                  <div className="flex items-baseline">
                    <h4 className="text-xl font-bold text-gray-800">{patient.vitals.heartRate}</h4>
                    <span className="ml-1 text-sm text-gray-500">bpm</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
                  <Thermometer size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Temperature</p>
                  <div className="flex items-baseline">
                    <h4 className="text-xl font-bold text-gray-800">{patient.vitals.temperature}</h4>
                    <span className="ml-1 text-sm text-gray-500">°F</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                  <Droplet size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Blood Pressure</p>
                  <div className="flex items-baseline">
                    <h4 className="text-xl font-bold text-gray-800">{patient.vitals.bloodPressure}</h4>
                    <span className="ml-1 text-sm text-gray-500">mmHg</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Respiratory Rate</p>
                  <div className="flex items-baseline">
                    <h4 className="text-xl font-bold text-gray-800">{patient.vitals.respiratoryRate}</h4>
                    <span className="ml-1 text-sm text-gray-500">bpm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Medical History</h3>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Conditions</h4>
              <div className="flex flex-wrap gap-2">
                {patient.medicalHistory.conditions.map((condition, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {condition}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Allergies</h4>
              <div className="flex flex-wrap gap-2">
                {patient.medicalHistory.allergies.map((allergy, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                  >
                    {allergy}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Medications</h4>
              <ul className="space-y-2">
                {patient.medicalHistory.medications.map((medication, index) => (
                  <li key={index} className="text-gray-800">
                    <span className="font-medium">{medication.name}</span>
                    <span className="text-gray-500"> - {medication.dosage}, {medication.frequency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Recent Appointments</h3>
              <Link 
                to={`/appointments?patient=${patient.id}`}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                View all
              </Link>
            </div>
            
            <div className="divide-y divide-gray-100">
              {patient.appointments.slice(0, 3).map((appointment, index) => (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-sm font-medium text-gray-800">{appointment.reason}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                      appointment.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-500">
                      <span>{appointment.date}</span>
                      <span className="mx-2">•</span>
                      <span>{appointment.time}</span>
                    </div>
                    <div className="text-gray-500">
                      Dr. {appointment.doctor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;