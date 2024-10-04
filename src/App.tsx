import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/navbar';
import HomePage from './pages/Home/HomePage';
import Sobre from './pages/Sobre/SobrePage';
import Projetos from './pages/Projetos/ProjetosPage'

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundColor: '#000000',
          height: '100vh',
          backgroundImage: 'url(../../img/background.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <header className="App-header">
          <DrawerAppBar />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
