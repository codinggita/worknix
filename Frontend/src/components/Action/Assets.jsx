import { Box } from 'lucide-react';
import { AssetItem } from './AssetItem';

const assets = [
  { category: "Laptops", count: 23, icon: Box },
  { category: "Printers", count: 3, icon: Box }
];

export function Assets() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-teal-600">Assets</h2>
        <button className="text-teal-600 text-sm">View All</button>
      </div>
      <div className="mb-4">
        <p className="text-2xl font-bold text-gray-800">78</p>
        <p className="text-gray-600">Total Assets</p>
      </div>
      <div className="space-y-4">
        {assets.map((asset, index) => (
          <AssetItem key={index} {...asset} />
        ))}
      </div>
    </div>
  );
}