import React, { Component } from 'react';

class Questions extends Component{

    render() {
        return(
            <section className="questions">
                <div className="container questions__wrap">
                    <h2 className="questions__title">
                        При заключении договора подряда в этом году на зимнее строительство дома,
                        <span>ПОДАРОК на выбор:</span>
                    </h2>
                    <p className="questions__desc">
                        Задайте интересующий вас вопрос нашему специалисту
                        и получите ответ в течение 15 минут!
                    </p>
                    <div className="surprise">
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha1.png" alt="Подарок на выбор"/>
                                <p className="surprise__desk">
                                    «натуральная черепица Braas»
                                </p>
                            </div>
                        </div>
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha2.png" alt="Подарок на выбор"/>
                                <p className="surprise__desk">
                                    «фасадная краска Sikkens»
                                </p>
                            </div>
                        </div>
                    </div>
                    <form className="questions__form">
                        <label>Имя</label>
                        <input type="text" className="field"/>
                        <label>Номер телефона</label>
                        <input type="text" className="field"/>
                        <label>Введите Ваш вопрос</label>
                        <textarea className="field field--textarea"></textarea>
                        <button className="btn">
                            Задать вопрос
                        </button>
                    </form>
                </div>
            </section>
        )
    }
}


export default Questions;
