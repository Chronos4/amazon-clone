import React from 'react'
import { useStateValue } from '../../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img alt="" className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
                {basket?.length !== 0 ? (
                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                        {basket?.map(item => (
                            <CheckoutProduct
                                item={item?.id}
                                title={item?.title}
                                price={item?.price}
                                image={item?.image}
                                rating={item?.rating} />)
                        )}
                    </div>
                ) : (
                        <div>
                            <h2>Your shopping basket is empty</h2>
                            <p>You have no items in your basket.To buy one or more items,click "Add to basket" next to the item</p>
                        </div>
                    )
                }
            </div>
            {basket?.lenth > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
