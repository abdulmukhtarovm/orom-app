import React from 'react'

const Ingredients = () => {
    return (
        <div className='Ingr'>
            <div className="back">
                <img src="img/sostavBg.png" alt="" />
            </div>
            <div className="container">
            <div className="text-center">
                <h2 className='main-title'>Состав воды</h2>
            </div>
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="img">
                            <img className='w-100' src="img/sostav.png" alt="" />
                        </div>
                        <ul>
                            <li>Хлорид CI-</li>
                            <li>Калий К+</li>
                            <li>Гидро карбонат HCO3-</li>
                            <li>Сульфат SO4-</li>
                        </ul>
                        <ul>
                            <li>Натрий Na+</li>
                            <li>Магний Mg++</li>
                            <li>Кальций Ca++</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ingredients