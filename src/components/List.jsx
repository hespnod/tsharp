import { useContext } from "react";
import TotalContext from "../context/total-context";

const List = (props) => {

    const ctx = useContext(TotalContext);

    const handleDelete = (id, price) => {
        props.onDelete(id);
        ctx.setTotal((prev) => Number(prev) - Number(price));
    }
    return (
        <div className='flex flex-col items-center justify-center text-center mt-[60px] shadow-lg w-[30vw] mx-auto'>
            <h1 className='text-4xl font-extrabold mb-2' >Products:</h1>
            <h3 className='font-mono font-bold mb-2' >Electronics</h3>
            <ul>
                {props.item.map((items) => (
                    (items.cateogory === 'Electronics') &&
                    <li className=' font-mono mb-2' key={items.id}>
                        {items.name} {items.price}{" "}
                        <button className='ml-2 bg-red-600 rounded-md' onClick={() => { handleDelete(items.id, items.price) }}>Delete Item</button>{" "}
                    </li>
                ))}
            </ul>
            <h3 className='font-mono font-bold mb-2' >SkinCare</h3>
            <ul>
                {props.item.map((items) => (
                    (items.cateogory === 'SkinCare') &&
                    <li className=' font-mono mb-2' key={items.id}>
                        {items.name} {items.price}{" "}
                        <button className='ml-2 bg-red-600 rounded-md' onClick={() => { handleDelete(items.id, items.price) }}>Delete Item</button>{" "}
                    </li>
                ))}
            </ul>
            <h3 className='font-mono font-bold mb-2'>Food</h3>
            <ul>
                {props.item.map((items) => (
                    (items.cateogory === 'Food') &&
                    <li className=' font-mono mb-2' key={items.id}>
                        {items.name} {items.price}{" "}
                        <button className='ml-2 bg-red-600 rounded-md' onClick={() => { handleDelete(items.id, items.price) }}>Delete Item</button>{" "}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default List;
