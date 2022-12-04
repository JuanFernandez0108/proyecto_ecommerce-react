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
                <button className="btn-4"><Link to={`/item/${props.id}`}>Info del producto</Link></button>
            </div>
        </div>
    )
}

export default Item;