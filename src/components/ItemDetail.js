const ItemDetail = (props) => {
    return(
        <div className="item_detail">
            <div className="image_box_detail">
                <img className="image_detail" src={props.imagenDetail} alt="" />
            </div>
            <div className="details_detail">
                <h5>{props.titulo}</h5>
                <p>{props.descripcion}</p>
                <span className="simbol_price_detail"></span><span className="price_span_detail">{props.precio}</span>
                <button className="btn_detail">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;