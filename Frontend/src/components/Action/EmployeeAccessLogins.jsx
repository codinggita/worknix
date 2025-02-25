export function EmployeeAccessLogins() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-bold text-teal-600 mb-4">Employee Access Logins</h2>
      <div className="mb-4">
        <h3 className="text-gray-600">Overall Headcount</h3>
        <p className="text-2xl font-bold text-gray-800">128 Total Users</p>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 h-2 bg-teal-200 rounded-full">
          <div className="w-2/3 h-full bg-teal-600 rounded-full"></div>
        </div>
        <div className="flex-1 h-2 bg-orange-200 rounded-full">
          <div className="w-1/4 h-full bg-orange-400 rounded-full"></div>
        </div>
        <div className="flex-1 h-2 bg-pink-200 rounded-full">
          <div className="w-1/6 h-full bg-pink-400 rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-sm">
        <span>82 Active Users</span>
        <span>24 Awaiting Registration</span>
        <span>22 Users Registered</span>
      </div>
    </div>
  );
}