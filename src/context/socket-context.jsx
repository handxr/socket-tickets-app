import React from "react";
import { useSocket } from "../hooks/use-socket";

export const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket("http://localhost:8080");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
