import { DivideIcon as LucideIcon } from 'lucide-react';

export function AssetItem({ category, count, icon: Icon }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-teal-600" />
        <span className="text-gray-700">{category}</span>
      </div>
      <span className="text-gray-600">{count}</span>
    </div>
  );
}