import Item from '../components/Item';

const ItemList = ({ items }) => {
return (
    <section>
    {
        items.map(item => (
            <Item 
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            titulo={item.titulo}
            descripcion={item.descripcion}
            precio={item.precio} />
        ))
    }
    </section>
)
}

export default ItemList;