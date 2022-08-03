import { useState, useEffect } from "react";
import { recuperarProductosxID } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {
    const [productos, setProductos] = useState ()
    useEffect (() => {
        recuperarProductosxID(id)
        .then(productos => {
            setProductos(productos)

        })
        .catch(error =>{
            console.log(error)
        })
    }, [])

    return (
        <div>
            <h1>Mira a fondo nuestros productos!</h1>
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer