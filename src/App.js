import React from 'react';

import Drawer from './Components/Drawer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="container">
      <Drawer />
      <div>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
