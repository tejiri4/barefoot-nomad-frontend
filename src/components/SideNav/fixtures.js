import React from 'react';
import { FiActivity, FiCompass, FiMessageCircle, FiLogOut } from "react-icons/fi";

const dashboardLinks = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FiActivity />
  },
  {
    path: "/dashboard/trips",
    name: "Trips",
    icon: <FiCompass />
  },
  {
    path: "/dashboard/chat",
    name: "Chat",
    icon: <FiMessageCircle />
  },
  {
    path: "/",
    name: "Logout",
    icon: <FiLogOut />
  }
];

export default dashboardLinks;
