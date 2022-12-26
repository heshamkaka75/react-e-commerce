import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Componants/Home/Home'
import Card from './Componants/Card/Card'
import Product from './Componants/Product/Product'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/card' element = { <Card /> } />
        <Route path='/pro' element = { <Product /> } />
      </Routes>
    </div>
  );
}

export default App;
