import "./header.css"
import logo from "../../assets/Header/logo.svg"
import icon_menu from "../../assets/Header/icon_menu.svg"

import MenuItem from './MenuItem'
import links from '../../data'
import { Link } from "react-router-dom"

function Header() {
    const menuLinksLeft = [
        {
            id: 1,
            title: "About",
            link: "/about"
        },
        {
            id: 2,
            title: "Catalog",
            link: "/catalog"
        },
    ]

    const menuLinksCenter = [
        {
            id: 3,
            title: "Home",
            link: links[0].link
        },
    ]

    const menuLinksRight = [
        {
            id: 4,
            title: "Cart",
            link: "/cart"
        },
        {
            id: 5,
            title: "Log in",
            link: "/login"
        },
    ]

    const menuItemsRight = menuLinksRight.map( (l) => (
        <MenuItem
            key={l.id}
            title={l.title}
            link={l.link}
        />
    ))

    const menuItemsCenter = menuLinksCenter.map( (l) => (
        <Link key={l.id} className="menu-item" to={l.link}>
            <img src= {logo} alt="Home" />
        </Link>
    ))

    const menuItemsLeft = menuLinksLeft.map( (l) => (
        <MenuItem
            key={l.id}
            title={l.title}
            link={l.link}
        />
    ))

    return(
        <header>
        <div class="header">
            <div class="container">
                <div class="header__main header-menu">
                    <div class="header-menu__left menu-block">
                        {menuItemsLeft}
                        
                    </div>
                    <div class="header-menu__logo logo">
                    <div className="menu-item">
                        { menuItemsCenter }
                    </div>
                    </div>
                    <div class="header-menu__right menu-block">
                        {menuItemsRight}
                        
                        <button class="menu-block__item menu-item">
                            <img class="menu-item__burger burger" src={icon_menu}/>
                        </button>
                    </div>
                </div>
            </div> 
        </div>   
    </header>
    )
}

export default Header