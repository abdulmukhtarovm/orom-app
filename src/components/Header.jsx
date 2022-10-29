import React from 'react'

const Header = () => {
    return (
        <div className='Header'>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <div className="info">
                            <div className="logos">
                                <img src="img/headerLogo.png" alt="" />
                            </div>
                            <h1>Каждая капля сделает вас счастливым</h1>
                            <div className="buttons d-flex d-md-block d-none">
                                <div className="mybtn order">
                                    <a href="/">Заказать</a>
                                </div>
                                <div className="more">
                                    <a href="/">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons d-flex d-md-none d-block">
                        <div className="mybtn order">
                            <a href="/">Заказать</a>
                        </div>
                        <div className="more">
                            <a href="/">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header