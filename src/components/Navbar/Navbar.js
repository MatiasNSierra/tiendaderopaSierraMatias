import './Navbar.css'
import CardWidget from '../CartWidget/CartWidget.js'


const Navbar = () => {
    return (
        <nav class="navi">
            <div class="titulo">
               <h2>Tienda de Ropa</h2> 
            </div>
            <div class="itemsnavbar">
                <button class="itemnavbar" >Buzos</button>
                <button class="itemnavbar">Remeras</button>
                <button class="itemnavbar">Zapatillas</button>
                  <CardWidget />  
            </div>
        </nav>    
        
    )
}

export default Navbar