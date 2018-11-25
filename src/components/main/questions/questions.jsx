import React, { Component } from 'react';

class Questions extends Component{

    render() {
        return(
            <section className="questions">
                <div className="container questions__wrap">
                    <h2 className="questions__title">
                        Остались вопросы?
                    </h2>
                    <p className="questions__desc">
                        Задайте интересующий вас вопрос нашему специалисту
                        и получите ответ в течение 15 минут!
                    </p>
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
