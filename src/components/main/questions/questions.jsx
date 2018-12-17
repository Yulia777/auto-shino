import React, { Component } from 'react';
import SimpleSlider from '../../elements/slider/slider';
import MaskedInput from 'react-maskedinput';

class Questions extends Component{

    render() {
        return(
            <section className="questions">
                <div className="container questions__wrap">
                    <h2 className="questions__title">
                        При заключении договора подряда в этом году на зимнее строительство дома,
                        <span>ПОДАРОК на выбор:</span>
                    </h2>
                    <div className="surprise">
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha1.png" alt="Подарок на выбор"/>
                                <p className="surprise__desc">
                                    «натуральная черепица Braas»
                                </p>
                            </div>
                        </div>
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha2.png" alt="Подарок на выбор"/>
                                <p className="surprise__desc">
                                    «фасадная краска Sikkens»
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="questions__title--down">
                        <span>ЗАКАЖИТЕ</span><br/>
                        ЗВОНОК У СПЕЦИАЛИСТА В ОБЛАСТИ ДОМОСТРОЕНИЯ
                    </h2>
                    <div className="slider-form">
                        <div className="slider">
                            <SimpleSlider/>
                        </div>
                        <form className="questions__form" id="specialists">
                            <input type="text" placeholder="Как Вас зовут?" className="field" id="specialists-name"/>
                            <MaskedInput id="specialists-phone" mask="+7(111) 111 11 11" type="text"
                                         placeholder={'Введите Ваш телефон*'} size={''}
                                          name="number" className="field"/>
                            {/*<input type="text" placeholder="Введите Ваш телефон" className="field"/>*/}
                            <input type="text" placeholder="Введите Ваш Email" className="field" id="specialists-email"/>
                            <button className="btn">
                                ПЕРЕЗВОНИТЬ
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


export default Questions;
