import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-1">
                        <div className="logo">
                            <a href="/"><img src="img/logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-3 offset-lg-1">
                        <ul className="nav-menu">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/">О компании</a></li>
                            <li><a href="/">Каталог</a></li>
                        </ul>
                    </div>
                    <div className="col-2 offset-lg-5">
                        <div className="btns">
                            <div className="search">
                                <input id='search' type="search" />
                                <label htmlFor="search"><FontAwesomeIcon icon={faSearch}/></label>
                            </div>
                            <div className="order mybtn">
                                <a href="/">Заказать</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar