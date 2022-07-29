import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'

function App() {

 
  const paraAgregar = (quantity) => {
    console.log(`Se agrego: ${quantity}`)
  }



  return (
    <div className="App">
    
      <Navbar />
      <ItemListContainer saludo='Hola bienvenido!'/>
      <Counter cantidad={25} agregar={paraAgregar} />
    </div>
  );
}

export default App;
