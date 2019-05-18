import React from 'react';
import 'resources/css/App.css';
import AppBody from 'components/AppBody';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBody data_url="http://192.168.1.161:5000/api/products" />
      </header>
    </div>
  );
}

export default App;
