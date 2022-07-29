import './Item.css'

const Item = ({productos}) => {
    return (
      <li class="tarjetita">
      <h3>{productos.nombre}</h3>
      <img src={productos.img} alt={productos.name}/>
       <p>${productos.precio}</p>
       <p>Cantidad: {productos.stock} </p>
       <p>{productos.descripcion}</p>
       

  </li>
   
   
   
    
    )
}

export default Item