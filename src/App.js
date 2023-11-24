//import logo from './logo.svg';
import User from './components/User/User';
import './App.css';

function App() {
  const a = 10;
  return (
    <div className="App-header">
      <h1>Hola Mundo: {a} </h1>
      <User Nombre = "Gabriela"/>
    </div>
  );
}

export default App;
