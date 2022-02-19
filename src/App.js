import React from 'react';
import './App.css';
import Render from './components/Navigation/Render'
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <main class=".bg-info">
        <Render></Render>
      </main>
      <Footer></Footer>

    </div>
  );
}

export default App;
