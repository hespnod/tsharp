const List = (props) => {

    const handleDelete = (id) => {
        props.onDelete(id);
    }
    return (
        <div>
            <h1>Products:</h1>
            <ul>
                {props.item.map((items) => (
                    <li key={items.id}>
                        {items.name} {items.price}{" "}
                        <button onClick={() => { handleDelete(items.id) }}>Delete Item</button>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default List;
