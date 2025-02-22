import React from 'react';
import { Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

function Dashboard() {
  const stats = [
    { icon: Clock, label: 'Ongoing Tasks', value: '12' },
    { icon: Users, label: 'Team Members', value: '24' },
    { icon: CheckCircle, label: 'Completed', value: '156' },
    { icon: AlertCircle, label: 'Due Soon', value: '8' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <stat.icon className="w-8 h-8 text-teal-600 mr-4" />
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">Task Name {index + 1}</h3>
                  <p className="text-sm text-gray-600">Due in 2 days</p>
                </div>
                <span className="px-3 py-1 text-sm bg-teal-100 text-teal-800 rounded-full">
                  In Progress
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Team Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-teal-800">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">User {index + 1}</p>
                  <p className="text-sm text-gray-600">Completed task "Feature Implementation"</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;