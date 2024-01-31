import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget.jsx";


const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Mates"
                    itemDos = "Yerbas"
                    itemTres = "Accesorios"   
                />
                
            </nav>
            
            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;

