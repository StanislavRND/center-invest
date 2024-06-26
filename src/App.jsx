import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ApiService from './API/ApiService';
import './App.scss';
import FormCard from './components/forms/FormCard';
import CreateCard from './components/main/card/CreateCard';
import Auth from './pages/Auth';
import Moderator from './pages/Moderator';
import NotFoundPage from './pages/NotFoundPage';
import Register from './pages/Register';
import Events from './pages/Events';
import Home from './pages/Home';
import Departments from './pages/Departments';
import RecordDoctor from './pages/RecordDoctor';

function App() {
  const refresh = localStorage.getItem('refresh');
  useEffect(() => {
    ApiService.refreshToken(refresh);

    const intervalId = setInterval(ApiService.refreshToken, 2 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/form-card" element={<FormCard />} />
        <Route path="/moderator" element={<Moderator />} />
        <Route path="/events" element={<Events />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/record-doctor" element={<RecordDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
