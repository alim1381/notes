import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// components 
import Landing from './components/Landing'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
