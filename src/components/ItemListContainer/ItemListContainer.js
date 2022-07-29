import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { recuperarProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ( {saludo} ) => {

  const [productos, setProductos] = useState([])

  useEffect(() =>{
    recuperarProductos().then(productos => {
        setProductos(productos)
    })
  })





    return (
        <>
        
        <h1 class="saludos">{saludo}</h1>

        <ItemList productos={productos}/>

        </>
    
    )
}

export default ItemListContainer