import { useContext, useRef, useState } from "react";
import TotalContext from "../context/total-context";

const Input = (props) => {

    const [cateogory, setCateogory] = useState('Electronics');

    const ctx = useContext(TotalContext);

    const handleChange = (e) => {
        setCateogory(e.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const details = {
            id: idRef.current.value,
            price: Number(priceRef.current.value),
            name: nameRef.current.value,
            cateogory: cateogory
        }
        ctx.setTotal((prev) => {
            const final = Number(prev) + details.price;
            console.log('final value is:-> ', final);
            return final;
        });
        props.onSubmit(details);
        idRef.current.value = '';
        priceRef.current.value = '';
        nameRef.current.value = '';
    }
    const idRef = useRef();
    const priceRef = useRef();
    const nameRef = useRef();
    return (
        <div className='bg-slate-200 h-[10vh] p-6 flex justify-between' >
            <form onSubmit={handleSubmit}>
                <label htmlFor="productID">ProductID</label>
                <input className='p-1 m-2 rounded' type="number" ref={idRef} />
                <label htmlFor="price">Selling Price</label>
                <input className='p-1 m-2 rounded' type="number" ref={priceRef} />
                <label htmlFor="name">Product Name</label>
                <input className='p-1 m-2 rounded' type="text" ref={nameRef} />
                <label htmlFor="cateogory">Choose a cateogory</label>
                <select className='p-1 ml-2 bg-white' onChange={handleChange} name="cateogory" id="cateogory">
                    <option value="Electronics">Electronics</option>
                    <option value="SkinCare">SkinCare</option>
                    <option value="Food">Food</option>
                </select>
                <input className=' bg-black text-white rounded-md ml-2 p-1' type="submit" />
            </form>
        </div>
    )
};

export default Input;