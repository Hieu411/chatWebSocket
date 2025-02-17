import { Link, Outlet } from "react-router-dom";

const ChatRoom = () => {
  return (
    <div className="h-screen flex bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-white/20 backdrop-blur-md p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-lg font-bold text-center text-gray-100 mb-4">
            🔥 Chat Options
          </h3>
          <nav className="space-y-3">
            <Link
              to="private"
              className="block px-5 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105"
            >
              🔒 Private Chat
            </Link>
            <Link
              to="group"
              className="block px-5 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-105"
            >
              👥 Group Chat
            </Link>
            <Link
              to="/"
              className="block px-5 py-3 bg-yellow-500 text-white
              rounded-lg shadow-md hover:bg-yellow-600 transition transform
              hover:scale-105"
            >
              Home
            </Link>
          </nav>
        </div>

        {/* User List
        <div className="mt-6">
          <h3 className="text-md font-semibold text-center text-gray-200">
            👥 Online Users
          </h3>
          <div className="mt-2 space-y-2">
            <p className="bg-white/20 text-gray-100 p-2 rounded-lg">
              🟢 John Doe
            </p>
            <p className="bg-white/20 text-gray-100 p-2 rounded-lg">
              🟢 Jane Smith
            </p>
            <p className="bg-white/20 text-gray-100 p-2 rounded-lg">
              🟢 Michael Lee
            </p>
          </div>
        </div> */}
      </div>

      {/* Chat Display */}
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-xl w-4/5 max-w-4xl text-gray-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
