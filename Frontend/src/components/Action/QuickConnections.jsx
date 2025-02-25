import { UserPlus, Vote, Clock, Megaphone, LogOut, Building2 } from 'lucide-react';
import { QuickAction } from './QuickAction';

export function QuickConnections({ onActionClick }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold text-teal-600 mb-4">Quick Connections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <QuickAction 
          icon={UserPlus} 
          text="Add New Team Member" 
          onClick={() => onActionClick('addMember')}
        />
        <QuickAction 
          icon={Vote} 
          text="Create New Poll" 
          onClick={() => onActionClick('createPoll')}
        />
        <QuickAction 
          icon={Clock} 
          text="Request Overtime" 
          onClick={() => onActionClick('requestOvertime')}
        />
        <QuickAction 
          icon={Megaphone} 
          text="Make Announcement" 
          onClick={() => onActionClick('makeAnnouncement')}
        />
        <QuickAction 
          icon={LogOut} 
          text="Submit Leave Request" 
          onClick={() => onActionClick('leaveRequest')}
        />
        <QuickAction 
          icon={Building2} 
          text="Mark Attendance" 
          onClick={() => onActionClick('attendance')}
        />
      </div>
    </div>
  );
}