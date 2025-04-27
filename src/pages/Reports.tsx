import React, { useState } from 'react';
import { FileText, BarChart2, PieChart, Download, Filter } from 'lucide-react';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('monthly');
  const [reportPeriod, setReportPeriod] = useState('last30');
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <p className="text-gray-500">Generate insights from your patient data</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <div className="flex space-x-2">
            <button
              onClick={() => setReportType('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                reportType === 'monthly' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monthly Summary
            </button>
            <button
              onClick={() => setReportType('patients')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                reportType === 'patients' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Patient Demographics
            </button>
            <button
              onClick={() => setReportType('conditions')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                reportType === 'conditions' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Common Conditions
            </button>
          </div>
          
          <div className="flex space-x-2">
            <select
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="last30">Last 30 days</option>
              <option value="last90">Last 90 days</option>
              <option value="last180">Last 180 days</option>
              <option value="year">This year</option>
            </select>
            
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              <Filter size={16} className="mr-2" />
              Filter
            </button>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
          {reportType === 'monthly' && (
            <div className="w-full max-w-3xl">
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Monthly Patient Visits</h3>
              
              <div className="h-64 flex items-end justify-between px-2">
                {/* Simplified chart bars */}
                {[42, 38, 56, 42, 48, 52, 64, 58, 72, 68, 75, 85].map((height, index) => (
                  <div key={index} className="w-1/12 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-500 rounded-t-md transition-all duration-500 hover:bg-blue-600"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-6 text-sm text-gray-500">
                Total visits: 705 | Average: 58.75 per month
              </div>
            </div>
          )}
          
          {reportType === 'patients' && (
            <div className="w-full max-w-3xl">
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Patient Demographics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">Age Distribution</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="space-y-4">
                      {[
                        { label: '0-18', value: 15, color: 'bg-blue-500' },
                        { label: '19-35', value: 32, color: 'bg-green-500' },
                        { label: '36-50', value: 28, color: 'bg-yellow-500' },
                        { label: '51-65', value: 18, color: 'bg-orange-500' },
                        { label: '65+', value: 7, color: 'bg-red-500' },
                      ].map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`${item.color} h-2 rounded-full`} 
                              style={{ width: `${item.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3 text-center">Gender Distribution</h4>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <div className="w-48 h-48 relative rounded-full overflow-hidden border-8 border-white shadow-md">
                      {/* Simplified pie chart */}
                      <div 
                        className="absolute bg-blue-500 w-full h-full"
                        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 0)' }}
                      ></div>
                      <div 
                        className="absolute bg-pink-500 w-full h-full"
                        style={{ clipPath: 'polygon(50% 50%, 100% 0, 0 0)' }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full w-20 h-20 mx-auto my-auto"></div>
                    </div>
                    
                    <div className="ml-6">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Male (48%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                        <span className="text-sm">Female (52%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {reportType === 'conditions' && (
            <div className="w-full max-w-3xl">
              <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Most Common Medical Conditions</h3>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-5">
                  {[
                    { label: 'Hypertension', value: 24, color: 'bg-red-500' },
                    { label: 'Type 2 Diabetes', value: 18, color: 'bg-purple-500' },
                    { label: 'Asthma', value: 16, color: 'bg-blue-500' },
                    { label: 'Depression', value: 14, color: 'bg-green-500' },
                    { label: 'Obesity', value: 12, color: 'bg-yellow-500' },
                    { label: 'Arthritis', value: 10, color: 'bg-orange-500' },
                    { label: 'Anxiety', value: 9, color: 'bg-pink-500' },
                    { label: 'GERD', value: 8, color: 'bg-indigo-500' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`${item.color} h-3 rounded-full`} 
                          style={{ width: `${item.value * 3}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center">
              <FileText size={18} className="mr-2 text-blue-600" />
              Available Reports
            </h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Generate New
            </button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Monthly Patient Summary - April 2025', date: '15 Apr 2025', type: 'PDF' },
              { name: 'Quarterly Revenue Report - Q1 2025', date: '02 Apr 2025', type: 'XLSX' },
              { name: 'Patient Demographics Analysis', date: '28 Mar 2025', type: 'PDF' },
              { name: 'Appointment Trends - March 2025', date: '22 Mar 2025', type: 'PDF' },
              { name: 'Monthly Patient Summary - March 2025', date: '15 Mar 2025', type: 'PDF' },
            ].map((report, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-md ${
                    report.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                  } mr-3`}>
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{report.name}</h4>
                    <p className="text-xs text-gray-500">Generated on {report.date}</p>
                  </div>
                </div>
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800 flex items-center">
              <BarChart2 size={18} className="mr-2 text-blue-600" />
              Key Performance Indicators
            </h3>
            <select className="border border-gray-200 rounded-md text-sm p-1">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                name: 'Patient Satisfaction', 
                value: '4.8/5', 
                change: '+0.2', 
                isPositive: true,
                chart: [4.3, 4.4, 4.5, 4.6, 4.6, 4.8]
              },
              { 
                name: 'Average Wait Time', 
                value: '18 min', 
                change: '-3 min', 
                isPositive: true,
                chart: [24, 22, 21, 20, 19, 18]
              },
              { 
                name: 'Appointments per Day', 
                value: '42', 
                change: '+5', 
                isPositive: true,
                chart: [32, 35, 34, 37, 40, 42]
              },
              { 
                name: 'Cancellation Rate', 
                value: '4.2%', 
                change: '+0.8%', 
                isPositive: false,
                chart: [3.2, 3.0, 3.4, 3.8, 4.0, 4.2]
              },
            ].map((kpi, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-800">{kpi.name}</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-bold text-gray-900">{kpi.value}</span>
                    <span className={`ml-2 text-xs ${
                      kpi.isPositive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                
                <div className="w-24 h-16 flex items-end justify-between">
                  {kpi.chart.map((value, i) => (
                    <div 
                      key={i}
                      className={`w-2 rounded-sm ${kpi.isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ 
                        height: `${(value / Math.max(...kpi.chart)) * 100}%`,
                        opacity: 0.6 + (i / kpi.chart.length) * 0.4
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;