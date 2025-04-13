import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header title="Welcome to the Joke App!" />
    <Content />
    <Footer />
  </div>
);

export default App;
