import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Mates"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Yerbas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Accesorios">
                    {props.itemTres}
                </Link>
            </li>

           
        </ul>
    )
}

export default ItemListContainer;
