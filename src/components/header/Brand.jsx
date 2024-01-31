import brand from "../../img/brand.svg"
import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <Link to ="/">
        <img src={brand} alt ="Tienda La Casa del Mate" title="Tienda LCM"></img>        
        </Link>
    )
} 

export default Brand;