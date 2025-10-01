import React from 'react';
import './App.css';
import Navbar from "./components/organisms/Navbar";
import { ActiveUserContextProvider } from './Contexts/ActiveUserContext';
import Router from './Router/Router';

function App() {
  return (
    <ActiveUserContextProvider>
        <Navbar />
        <Router />
    </ActiveUserContextProvider>
  );
}

export default App;
