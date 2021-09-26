import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Investor from './Components/Investor/Investor';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Investor></Investor>
      <Footer></Footer>
    </div>
  );
}

export default App;
