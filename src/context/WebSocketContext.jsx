import { createContext, useContext, useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const WebSocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useWebSocket = () => useContext(WebSocketContext);

// eslint-disable-next-line react/prop-types
export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = socketIOClient('http://localhost:8080');
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};
