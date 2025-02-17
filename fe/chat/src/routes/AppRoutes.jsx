import Home from "../pages/Home";
import ChatRoom from "../pages/ChatRoom";
import PrivateChatRoom from "../pages/PrivateChatRoom";
import GroupChatRoom from "../pages/GroupChatRoom";
import { createBrowserRouter } from "react-router-dom";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat-room",
    element: <ChatRoom />,
    children: [
      { path: "private", element: <PrivateChatRoom /> },
      { path: "group", element: <GroupChatRoom /> },
    ],
  },

  // 404 Page
  { path: "*", element: <div>404 Not Found</div> },
]);

export default AppRoutes;
