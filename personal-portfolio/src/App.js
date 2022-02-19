import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
      <Button>Test Button</Button>


    </div>
  );
}

export default App;
