import React, { useState } from 'react';
import styles from "./Header.module.scss";
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';



export const logo = (
    <div className={styles.logo}>
        <Link to='/'>
            <h2>
                Batir<span>Em</span>
            </h2>
        </Link>
    </div>
);


const activeLink = (isActive) => (isActive ? `${styles.active}` : "")

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    };
    const hideMenu = () => {
        setShowMenu(false)
    };

    const cart = (
        <span className={styles.cart}>
            <Link to="/cart">
                Panier
                <FaShoppingCart size={20} />
                <p>0</p>
            </Link>
        </span>
    );
    return <header>
        <div className={styles.header}>{logo}
            <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>

                <div className={showMenu ? `${styles["nav-wrapper"]} $
                {styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}
                `} onClick={hideMenu}>

                </div>

                <ul>
                    <li className={styles["logo-mobile"]}>
                        {logo}
                        <FaTimes size={22} color="#fff" onClick={hideMenu} />

                    </li>
                    <li>
                        <NavLink to="/shop" className={activeLink} >
                            Achat
                        </NavLink>
                    </li>
                </ul>
                <div className={styles["header-right"]}>
                    <span className={styles.links}>
                        <NavLink to={"login"} className={activeLink}>
                            Se connecter
                        </NavLink>
                        <NavLink to={"register"} className={activeLink}>
                            Creer un compte
                        </NavLink>
                        <NavLink to={"order-history"} className={activeLink}>
                            Ma Commande
                        </NavLink>
                    </span>
                    {cart}
                </div>
            </nav>
            <div className={styles["menu-icon"]}>
                {cart}
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
            </div>
        </div>
    </header>;

};

export default Header;
