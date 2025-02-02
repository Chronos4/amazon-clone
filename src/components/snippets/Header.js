import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';
import { auth } from 'firebase';

function Header() {

    const [{ basket,user }] = useStateValue();

    const login = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="" /></Link>

            <div className="header__search" >
                <input className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={ login } className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user? "Sign out" : "Sign in"}</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">qweqw</span>
                        <span className="header__optionLineTwo">qwerty</span>
                    </div>
                </Link>
                <Link to="/login" className="header__link"><div className="header__option">
                    <span className="header__optionLineOne">you</span>
                    <span className="header__optionLineTwo">me</span>
                </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basket__count">{basket?.length}</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header;
