import './Item.css'

const Item = ({id,stock, nombre, img, precio, setPaginas}) => {
    return (
      <li class="tarjetita">
      <h3>{nombre}</h3>
      <img src={img} alt={nombre}/>
       <p>${precio}</p>
       <p>Cantidad: {stock} </p>
       <button onClick={() => setPaginas({ ruta: 'detail', id: id})}>Ver detalle</button>
       

  </li>
   
   
   
    
    )
}

export default Item