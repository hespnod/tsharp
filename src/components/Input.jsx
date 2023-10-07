import { useRef } from "react";

const Input = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const details = {
            id: idRef.current.value,
            price: Number(priceRef.current.value),
            name: nameRef.current.value
        }
        props.onSubmit(details);
        idRef.current.value = '';
        priceRef.current.value = '';
        nameRef.current.value = '';
    }
    const idRef = useRef();
    const priceRef = useRef();
    const nameRef = useRef();
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productID">ProductID</label>
                <input type="number" ref={idRef} />
                <label htmlFor="price">Selling Price</label>
                <input type="number" ref={priceRef} />
                <label htmlFor="name">Product Name</label>
                <input type="text" ref={nameRef} />
                <input type="submit" />
            </form>
        </>
    )
};

export default Input;