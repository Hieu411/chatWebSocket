import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 text-white">
      {/* Logo & Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          Welcome to Chat App
        </h1>
        <p className="text-lg opacity-90 animate-slide-up">
          Connect with your friends instantly, anytime, anywhere.
        </p>
      </div>

      {/* Button */}
      <Link
        to="/chat-room"
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:bg-gray-200 duration-300"
      >
        🚀 Start Chatting
      </Link>

      {/* Decorative Element */}
      <div className="absolute bottom-6 text-sm opacity-75 animate-slide-up">
        Built with ❤️ by Chat App Team
      </div>
    </div>
  );
};

export default Home;
