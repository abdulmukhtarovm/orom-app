import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Services = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const [activeTab, setActiveTab] = useState('1');

    const toggle1 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='Services'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="info">
                            <h2 className='main-title'>Наши услуги</h2>
                            <h6>Наша служба доставки предоставляет целый комплекс услуг:</h6>
                            <Nav tabs className='myNavs border-none'>
                                <Accordion className='service__list w-100 border2' open={open} toggle={toggle}>

                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle1('1'); }}>
                                            <AccordionItem className='wrap'>
                                                <AccordionHeader targetId="1">
                                                    <div className='burger'>
                                                        <div className="burger1"></div>
                                                        <div className="burger2"></div>
                                                    </div>
                                                    Вода на дом
                                                </AccordionHeader>
                                                <AccordionBody accordionId="1">
                                                    <p>Больше нет необходимости нести из магазина тяжелые бутыли – мы доставим их к вам домой а, при желании, занесем в квартиру и установим на кулер.</p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle1('2'); }}>
                                            <AccordionItem className='wrap'>
                                                <AccordionHeader targetId="2">
                                                    <div className='burger'>
                                                        <div className="burger1"></div>
                                                        <div className="burger2"></div>
                                                    </div>
                                                    Вода в офис
                                                </AccordionHeader>
                                                <AccordionBody accordionId="2">
                                                    <p>Доставляем баллоны в коммерческие и государственные организации, бизнес-центры, спортивные, образовательные и другие учреждения. </p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle1('3'); }}>
                                            <AccordionItem className='wrap'>
                                                <AccordionHeader targetId="3">
                                                    <div className='burger'>
                                                        <div className="burger1"></div>
                                                        <div className="burger2"></div>
                                                    </div>
                                                    Кулеры и помпы
                                                </AccordionHeader>
                                                <AccordionBody accordionId="3">
                                                    <p>Осуществляем продажу разных видов аппаратов для розлива воды: помп, напольных и настольных кулеров, а также предлагаем их в аренду. </p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        </NavLink>
                                    </NavItem>

                                </Accordion>
                            </Nav>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide><img className='w-100' src="img/service (1).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (2).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (3).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (4).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane>
                            <TabPane tabId="2">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                    <SwiperSlide><img className='w-100' src="img/service (5).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (6).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (7).png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-100' src="img/service (8).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane>
                            <TabPane tabId="3">
                                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide><img className='w-100' src="img/service (13).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (14).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (15).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (16).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (17).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (18).png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='w-100' src="img/service (19).png" alt="" /></SwiperSlide>

                                </Swiper>
                            </TabPane>

                        </TabContent>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services