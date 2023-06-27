import "./header.css"
import logo from "../../assets/Header/logo.svg"
import icon_menu from "../../assets/Header/icon_menu.svg"

function Header() {
    return(
        <header>
        <div class="header">
            <div class="container">
                <div class="header__main header-menu">
                    <div class="header-menu__left menu-block">
                        <a class="menu-block__item menu-item">About</a>
                        <a class="menu-block__item menu-item">Gallery</a>
                    </div>
                    <div class="header-menu__logo logo">
                        <a class="logo__wrap menu-item">
                            <img  src={logo}/>
                        </a>
                    </div>
                    <div class="header-menu__right menu-block">
                        <a class="menu-block__item menu-item">Blog</a>
                        <a class="menu-block__item menu-item">Contact</a>
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