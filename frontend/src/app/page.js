"use client"
import React from 'react';
import LandingPage from './Pages/LandingPage';
import Login from './Authentication/Login/page';
import { useAuth } from './Providers/AuthContext';
import Hero from './components/Hero';
export default function Home(){
  const { userData } = useAuth();

  return (
    <>
      {/* {!userData && <Login/>} */}
      <LandingPage/>
      
    </>
  );
}

