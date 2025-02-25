import { DivideIcon as LucideIcon } from 'lucide-react';

export function QuickAction({ icon: Icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all w-full"
    >
      <div className="p-2 bg-teal-50 rounded-full">
        <Icon className="w-5 h-5 text-teal-600" />
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </button>
  );
}