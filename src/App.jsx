import MainContent from './ContentMain/ContentMain.jsx';
import Header from './Header/Header.jsx';
import Aside from './Aside/Aside.jsx';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [fileName, setFileName] = useState('');

  return (
    <div className="app">
      <Aside />

      <main className="content">
        <Header fileName={fileName}/>
        <MainContent setFileName={ setFileName }/>
      </main>
    </div>
  );
};

export default App;
