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
import UserNotCard from './pages/UserNotCard';

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
        <Route path="/home" element={<UserNotCard />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/form-card" element={<FormCard />} />
        <Route path="/admin" element={<Moderator />} />
      </Routes>
    </div>
  );
}

export default App;
