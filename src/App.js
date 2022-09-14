import './App.css';
import logo from './logo.svg';
import ContactFunc from './Components/pure/contactFunc';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <ContactFunc></ContactFunc>
      </header>
    </div>
  );
}

export default App;