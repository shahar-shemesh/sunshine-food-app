import { useState, useReducer, useContext } from "react";

import logo from "../assets/logo.png"
import Button from "./UI/Button";
import Modal from "./Modal.jsx";

import { CartContext } from "./cartContext";
import Cart from "./Cart";
import Checkout from "./Checkout.jsx";


function reducer(state, action) {
    switch (action.type) {

        case 'open':
            return true;

        case 'close':
            return false;
    }
}


export default function Header({ }) {

    const { items } = useContext(CartContext);
    const [modalIsOpen, dispatchModal] = useReducer(reducer, false);
    const [checkout, setCheckout] = useState(false);

    function onCloseModal() {
        dispatchModal({ type: 'close' });
        setCheckout(false);
    }

    return (<>


        <Modal open={modalIsOpen} >
            {checkout ? <Checkout onClose={onCloseModal} /> : <Cart onClose={onCloseModal} onCheckout={() => setCheckout(true)} />}

        </Modal>


        <header id="main-header">

            <div id="title">
                <img src={logo} />
                <h1>SUNSHINE FOOD</h1>
            </div>


            <nav>
                <Button textOnly onClick={() => dispatchModal({ type: 'open' })}>
                    <i class='bx bx-cart bx-sm' ></i> ({items.reduce(((total, item) => item.count + total), 0)})
                </Button>
            </nav>


        </header>
    </>);
};
