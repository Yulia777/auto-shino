import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormEmail = (props) => {
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" id="form-price2018">
                <MaskedInput  mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="phone"
                              id="form-price2018__phone" required="true" className="form-blank__field"/>
                <input className="form-blank__field"
                       id="form-price2018__email" type="email" placeholder={'Email*'} name="email"/>
                <input className="btn" type="submit" value="ЗАБРОННИРОВАТЬ"/>
            </form>
        </div>
    )
};

export default FormEmail;