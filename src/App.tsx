import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddArticle from './Components/AddArticle/AddArticle';
import MainPage from './Components/MainPage/MainPage';
import Navbar from './Components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AddArticle" element={<AddArticle />} />
      </Routes>
    </div>
  );
}

export default App;
