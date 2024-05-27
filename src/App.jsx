import ContentMain from './ContentMain.jsx';
import Header from './Header.jsx';
import Aside from './Aside.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Aside />

      <main className="content">
        <Header />
        <ContentMain />
      </main>
    </div>
  );
};

export default App;
