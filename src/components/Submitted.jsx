
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function Submitted({ onClose }) {

    const {resetCart}=useContext(CartContext);

    function handleOnClose(){
        onClose();
        resetCart();
    }

    return (<>
        <div>
            <h2>Done!</h2>
            <p>Your order was submitted.</p>
        </div>
        <div className="modal-actions">
            <button className='text-button' onClick={handleOnClose}>
                Close
            </button>
        </div>
    </>


    );
};


