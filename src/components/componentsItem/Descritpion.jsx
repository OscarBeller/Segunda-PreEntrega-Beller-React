const Description = (props) =>{
    return (
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>
            <div className="descritpion">
                <span className="descitpionTitle"></span>
                <p className="parrafo">
                    {props.parrafo}
                </p>
            </div>
            <span className="cant">
                CANTIDAD: {props.cantidad}
            </span>
            <span className="precio">
                PRECIO: ${props.precio}
            </span>
        </div>
    )
}

export default  Description;