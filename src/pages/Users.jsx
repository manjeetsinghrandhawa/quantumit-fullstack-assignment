import { FaCog, FaTimes } from "react-icons/fa";

export default function Users() {
  const users = [
    {
      id: 1,
      name: "Michael Holz",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      dateCreated: "04/10/2013",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Paula Wilson",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      dateCreated: "05/08/2014",
      role: "Publisher",
      status: "Active",
    },
    {
      id: 3,
      name: "Antonio Moreno",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      dateCreated: "11/05/2015",
      role: "Publisher",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Mary Saveley",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
      dateCreated: "06/09/2016",
      role: "Reviewer",
      status: "Active",
    },
    {
      id: 5,
      name: "Martin Sommer",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      dateCreated: "12/08/2017",
      role: "Moderator",
      status: "Inactive",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500";
      case "Suspended":
        return "bg-red-500";
      case "Inactive":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Users</h2>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Date Created</th>
              <th className="py-3 px-6 text-left">Role</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-6">{user.id}</td>
                <td className="py-3 px-6 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <span className="font-medium text-gray-800">{user.name}</span>
                </td>
                <td className="py-3 px-6">{user.dateCreated}</td>
                <td className="py-3 px-6">{user.role}</td>
                <td className="py-3 px-6 flex items-center gap-2">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${getStatusColor(
                      user.status
                    )}`}
                  ></span>
                  {user.status}
                </td>
                <td className="py-3 px-6 text-center flex justify-center gap-4">
                  <button
                    title="Edit"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaCog />
                  </button>
                  <button
                    title="Delete"
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTimes />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-end items-center gap-2 mt-4 text-sm text-gray-600">
        <button className="px-3 py-1 border rounded hover:bg-gray-100">1</button>
        <button className="px-3 py-1 border rounded bg-blue-500 text-white">
          2
        </button>
        <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
        <span className="ml-2">Next ›</span>
      </div>
    </div>
  );
}
