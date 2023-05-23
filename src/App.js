import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <Header isLoggedIn={false} />
      <Main />
    </div>
  );
}

export default App;
