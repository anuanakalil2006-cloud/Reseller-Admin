export default function Dashboard() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-black text-white h-screen p-4">
        <h2 className="text-xl mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2 cursor-pointer">Dashboard</li>
          <li className="mb-2 cursor-pointer">Resellers</li>
          <li className="mb-2 cursor-pointer">Orders</li>
          <li className="mb-2 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Content */}
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold">Welcome Admin 👋</h1>
        <p className="mt-2 text-gray-600">
          Manage your resellers, orders, and reports here.
        </p>
      </div>
    </div>
  );
}
