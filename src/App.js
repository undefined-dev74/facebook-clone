import Widgets from './Widgets';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          {/* App Body */}
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
