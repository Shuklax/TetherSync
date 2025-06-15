import React from "react";
import { Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotificationsPage from "./pages/NotificationsPage";
import OnBoardingPage from "./pages/OnBoardingPage";
import CallPage from "./pages/CallPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <div className="h-screen text-5xl" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/notifications" element={<NotificationsPage/>}/>
        <Route path="/onboarding" element={<OnBoardingPage/>}/>
        <Route path="/call" element={<CallPage/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
