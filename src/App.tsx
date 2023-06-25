import React from 'react';
import AppRoutes from './routes';
import Notification from 'react-notify-toast';

function App() {
  return (
    <>
      <Notification options={{ zIndex: 2000, top: 10 }} />
      <AppRoutes />
    </>
  );
}

export default App;
