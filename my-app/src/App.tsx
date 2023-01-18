import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabItem from "./components/common/Aside/Tabs/TabItem/TabItem";
import Aside from "./components/common/Aside/Aside";
import Main from "./pages/Main/Main";
import MainWrapper from "./components/common/MainWrapper/MainWrapper";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from './components/common/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <MainWrapper>
            <AppRouter/>
        </MainWrapper>
    </div>
  );
}

export default App;
