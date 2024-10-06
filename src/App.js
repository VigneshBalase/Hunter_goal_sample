// src/App.js
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './screens/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
