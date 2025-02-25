import { TimeOffRequest } from './TimeOffRequest';

const timeOffRequests = [
  {
    id: 1,
    name: "Amin Shaik",
    role: "Project Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    status: "approved",
    date: "2024-03-15",
    time: "09:00 AM"
  },
  {
    id: 2,
    name: "Natasha Mackwan",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    status: "rejected",
    date: "2024-03-16",
    time: "02:30 PM"
  },
  {
    id: 3,
    name: "Hena Bosch",
    role: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    status: "approved",
    date: "2024-03-17",
    time: "11:15 AM"
  },
  {
    id: 4,
    name: "Ms. Ellina",
    role: "Product Analyst",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    status: "pending",
    date: "2024-03-18",
    time: "04:45 PM"
  }
];

export function TimeOffRequests() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold text-teal-600 mb-4">Time Off Requests</h2>
      <div className="space-y-4">
        {timeOffRequests.map(request => (
          <TimeOffRequest key={request.id} {...request} />
        ))}
      </div>
    </div>
  );
}