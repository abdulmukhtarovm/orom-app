import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Catalog = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <div className='Catalog'>
            <div className="text-center mb-3">
                    <h2 className='main-title'>Каталог</h2>
                </div>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <Nav tabs className='myNavs'>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}>
                                        Все категории
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}>
                                        Воды
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}>
                                        Техники
                                    </NavLink>
                                </NavItem>
                                <NavItem className='myItem'>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}>
                                       Прочее
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (1).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <h6>99,000 сум</h6>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (2).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (3).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (4).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (5).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (6).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (2).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (4).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </TabPane>
                                <TabPane tabId="4">
                                <div className="row">
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (5).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-6 mb-lg-5 mb-3">
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="img">
                                                    <img src="img/catalog (6).png" alt="" />
                                                </div>
                                                <div className="info">
                                                    <h4>White mount 19L</h4>
                                                    <p className='d-none d-lg-block'>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</p>
                                                    <p className='d-block d-lg-none'>Наш интернет-магазин реализует воду.</p>

                                                    <div className="d-lg-flex justify-content-between">
                                                        <h5>Есть в наличии</h5>
                                                        <div>
                                                        <h6 className='oldPrice'>450,000 сум</h6>
                                                        <h6>360,000 сум</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="more">
                                                <a href="/">Заказать</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </TabPane>

                            </TabContent>
                            <div className="mybtn text-end">
                                <a href="/">Ещё <FontAwesomeIcon icon={faChevronRight}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog