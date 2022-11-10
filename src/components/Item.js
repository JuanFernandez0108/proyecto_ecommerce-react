import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import styles from '../styles/style.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
        <div className="items">
            <div className="image_box">
                <img className="images" src={props.imagen} alt="" />
            </div>
            <div className="details">
                <h5>{props.titulo}</h5>
                <span className="simbol_price"><MonetizationOnIcon sx={{ fontSize: 30 }} /></span><span className="price_span">{props.precio}</span>
                <button className="btn-3"><span>Agregar al carrito</span></button>
                <button className="btn-4"><Link to={`/item/${props.id}`}>Info del producto</Link></button>
            </div>
        </div>
    )
}

export default Item;