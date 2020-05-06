import React from 'react';
import './App.css';
import Booklist from './components/booklist/booklist';
// Mock Data
import Books from './mock/data/books.json';

function App() {
  console.log("I am mock data: ", Books);
  return (
    <div className="App">
      {/* Header */}
      {/* Login Detail - username  */}
      {/* Menu - Home .... */}
      {/* End of Header */}
      {/* Dashborad */}
      <Booklist />
    </div>
  );
}

export default App;
