import MainContent from './ContentMain/ContentMain.jsx';
import Header from './Header/Header.jsx';
import Aside from './Aside/Aside.jsx';
import HeaderName from './Header/HeaderName.jsx';
import './App.scss';

const App = () => {

  return (
    <div className="app">
      <Aside />

      <main className="content">
        <Header />
        <MainContent />
      </main>
    </div>
  );
};

export default App;
