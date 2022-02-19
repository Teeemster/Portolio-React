import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { makeStyles } from "@mui/styles";

const backgroundStyle = makeStyles({
  root: {
    backgroundColor: "#87CEEB"
  }
})

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
      </main>
      <Footer></Footer>


    </div>
  );
}

export default App;
