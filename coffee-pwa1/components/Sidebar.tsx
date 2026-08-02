export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav>
        <ul className="space-y-2">
          <li className="rounded-lg bg-gray-100 p-3">
            Dashboard
          </li>

          <li className="rounded-lg p-3">
            Products
          </li>

          <li className="rounded-lg p-3">
            Orders
          </li>

          <li className="rounded-lg p-3">
            Users
          </li>

          <li className="rounded-lg p-3">
            Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}