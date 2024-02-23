import React from 'react';
import {BrowserRouter as Router,Route, Navigate, Routes} from 'react-router-dom';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from './Dashboard/Dashboard';
import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return <>
    <Router>
      <Routes>
        {/* <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/register'>
          <RegisterPage />
        </Route>

        <Route path='/dashboard'>
          <Dashboard />
        </Route>

        <Redirect from="/" to="/dashboard" /> */}
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
      </Routes>
    </Router>
    <AlertNotification />
  </>;
}

export default App;
