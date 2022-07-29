import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
    const [menuIsClicked, setMenuIsClicked] = useState(false);
    const quantity = useSelector(state => state.cart.totalQuantity);

    const cartIsEmpty = quantity === 0;

    const activeClassHandler = () => {
        setMenuIsClicked(state => !state);
    };

    return <div className={classes.header}>
        <div className={classes.header__logo}>
        <h1>SillyGames</h1>
        </div>
        <div className={classes.header__nav}>
        <ul>
            <li><NavLink activeClassName={classes.active} to='/home'>Home</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/browse'>Browse</NavLink></li>
            <li><NavLink activeClassName={classes.active} to='/cart'>Cart {cartIsEmpty ? '(EMPTY)' : quantity}</NavLink></li>
        </ul>
        </div>
        <nav className={classes.navbar}>
        <ul className={menuIsClicked ? classes.menu_active : classes.menu}>
            <li className={classes.navbar__item}><Link onClick={activeClassHandler} className={classes.navbar__link} to='/home'>Home</Link></li>
            <li className={classes.navbar__item}><Link onClick={activeClassHandler} className={classes.navbar__link} to='/browse'>Browse</Link></li>
            <li className={classes.navbar__item}><Link onClick={activeClassHandler} className={classes.navbar__link} to='/cart'>Cart {cartIsEmpty ? '(EMPTY)' : quantity}</Link></li>
        </ul>
        
        <div className={menuIsClicked ? classes.hamburger_active : classes.hamburger} onClick={activeClassHandler}>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
            <span className={classes.bar}></span>
        </div>
        </nav>
    </div>
};

export default Header;