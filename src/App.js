import './App.css';
import Header from './components/Header'
import Banner from './components/Banner'
import Perfil from './components/Perfil'
import Informacoes from './components/Informacoes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner />
        <Perfil />
        <Informacoes />
        <Footer />
    </div>
  );
}

export default App;