const ItemDetail = (props) => {
    return(
        <div className="item_detail">
            <div className="image_box_detail">
                <img className="image_detail" src={props.item.imagenDetail} alt="" />
            </div>
            <div className="details_detail">
                <h5>{props.item.titulo}</h5>
                <p>{props.item.descripcion}</p>
                <span className="price_span_detail">${props.item.precio}</span>
                <button className="btn_detail">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail;