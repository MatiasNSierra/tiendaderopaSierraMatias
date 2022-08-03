import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Counter from './components/Counter/Counter'

function App() {

 
  const paraAgregar = (quantity) => {     {/* <button onClick={() => setPage('detail')}>detalle</button> */}
    console.log(`Se agrego: ${quantity}`)
  }

  const [paginas, setPaginas] = useState  ({ruta: 'lista', id: '1'})
  


  return (
    <div className="App">
    
      <Navbar />
      <div>
        <button onClick={() => setPaginas({...paginas, ruta: 'list'})}>Catálogo</button>
       
      </div>
      <div>
      {paginas.ruta === 'list' ? <ItemListContainer saludo='Hola bienvenido!' setPaginas={setPaginas}/> : null} 
      {paginas.ruta === 'detail' ? <ItemDetailContainer id={paginas.id}/> : null}
      
      </div>
      <Counter cantidad={25} agregar={paraAgregar} />
    </div>
  );
}

export default App;
