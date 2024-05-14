import React from 'react';
import Dashboard from './Dashboard';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Dashboard />
    </SnackbarProvider>
  );
}

export default App;
