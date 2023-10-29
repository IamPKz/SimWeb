import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'

import Rawlogs from './pages/userpages/Rawlogs'
import Activity from './pages/userpages/Activity';
import ML from './pages/userpages/ML';
import Attacking from './pages/userpages/Attacking';

import User from './pages/adminpages/User';
import File from './pages/adminpages/File';

import Login from './Login';

function App() {
  const loggedin = localStorage.getItem("isLoggedin")
  const token = localStorage.getItem('token') !== null;
  const userType = localStorage.getItem('userType');

  return (
      <BrowserRouter>
        <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="profile" element={<Rawlogs />} />
        <Route path="settings" element={<Activity />} />
      </Route>
    </Routes>
      </BrowserRouter>
  )
}

export default App
