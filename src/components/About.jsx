import React from 'react'

const About = () => {
  return (
    <div className='About'>
        <div className="backg">
            <img src="img/aboutBg.png" alt="" />
        </div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 zet">
                    <div className="img">
                        <img className='w-100' src="img/about.png" alt="" />
                    </div>
                </div>

                <div className="col-lg-5 zet">
                    <div className="info">
                        <h2>О НАС</h2>
                        <img className='logo' src="img/headerlogo.png" alt="" />
                        <h6>Наш интернет-магазин реализует воду самых лучших марок и предлагает интересные новинки.</h6>
                        <p>Качество – это главный приоритет в нашей работе, поэтому мы обеспечиваем быструю доставку вкусной и полезной воды, помогая заботиться о своем здоровье и здоровье близких.</p>
                    <div className="more">
                        <a href="/">Подробнее</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About