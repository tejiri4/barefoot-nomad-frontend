import React from "react";
import {
  FiActivity,
  FiCompass,
  FiMessageCircle,
  FiLogOut
} from "react-icons/fi";

const dashboardLinks = history => [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FiActivity />,
    exact: history.location.pathname.startsWith("/dashboard/request/")
      ? false
      : true
  },
  {
    path: "/dashboard/trips",
    name: "Trips",
    icon: <FiCompass />
  },
  {
    path: "/dashboard/chat",
    name: "Chat",
    icon: <FiMessageCircle />,
    exact: true
  },
  {
    path: "/",
    name: "Logout",
    icon: <FiLogOut />,
    exact: true
  }
];

export default dashboardLinks;
