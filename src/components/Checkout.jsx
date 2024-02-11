
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Submitted from "./Submitted";

export default function Checkout({ onClose }) {
    const { totalAmount } = useContext(CartContext);
    const [submitted, setSubmitted] = useState(false);

    function onSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const allFields = Object.fromEntries(fd.entries());
        console.log(allFields);


        event.target.reset();
        setSubmitted(true);
    }

    return (<>
        {submitted ? (<Submitted onClose={onClose} />) : (
            <div className="control">

                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(totalAmount)}</p>

                <form onSubmit={onSubmit}>
                    <label htmlFor="fullname" className="control-row">Full Name</label>
                    <input name="fullname" type="text" required />

                    <label htmlFor="email" className="control-row">Email</label>
                    <input name="email" type="email" required />

                    <label htmlFor="street" className="control-row">Street</label>
                    <input name="street" type="text" required />

                    <p className="control-row">
                        <label htmlFor="postalCode" >Postal Code</label>
                        <input name="postalCode" type="number" required />

                        <label htmlFor="city">City</label>
                        <input name="city" type="text" required />
                    </p>

                    <div className="modal-actions">
                        <button className='text-button' onClick={onClose}>
                            Close
                        </button>
                        <Button >Submit Order</Button>
                    </div>
                </form>

            </div>)}

    </>);
};


