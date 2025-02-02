import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import {getBasketTotal} from '../../reducer';

function Subtotal() {
    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{``}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains
                </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                thousandSeparator={true}
                displayType={"text"}
                prefix={"€"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
