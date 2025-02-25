import { StatusBadge } from './StatusBadge';

export function TimeOffRequest({ name, role, avatar, status, date, time }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500">{date}</span>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        </div>
      </div>
      {status && <StatusBadge status={status} />}
    </div>
  );
}