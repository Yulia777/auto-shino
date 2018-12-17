import React from 'react';
import MaskedInput from 'react-maskedinput';

const PopupKnowFundament = (props) => {
    return(


        <div className="form-blank__wrap">
        <form className="form-blank" id="form-3">
        <div className="know-more">
        <img src="./images/sk/fundament.jpg" alt="Текст для поп-ап"/>
        <div className="wrapper">
        <input className="form-blank__field" type="text" placeholder={'Имя*'} name="name" id="form-3__name"/>
        <MaskedInput id="form-3__phone" mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="number" required="true" className="form-blank__field"/>
        <input className="btn" type="submit" value="ОСТАВИТЬ ЗАЯВКУ"/>
        </div>
            </div>
        </form>
        </div>

    )
};

export default PopupKnowFundament;