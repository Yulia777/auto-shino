import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getIdeaSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';

class Branding extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupGetIdea: false
        };
    }

    sendFormGetIdea(event) {
        event.preventDefault();
        const formData = {
            type: 'email',
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
        };
        event.target.name.value = '';
        event.target.phone.value = '';
        event.target.email.value = '';

        this.props.sendEmail(formData);
        this.props.getIdeaSuccess(true);
        yaCounter31086026.reachGoal('Poluchit');
    }
    openPopupGetIdea() {
        this.setState({popupGetIdea: true});
        yaCounter31086026.reachGoal('Idei');
    }
    closePopupGetIdea() {
        this.setState({popupGetIdea: false});
        this.props.getIdeaSuccess(false);
    }


    render() {
        return(
            <section className="branding">
                <div className="container branding__wrap">
                    <div className="branding__item">
                        <h1 className="branding__title">
                            ПЕРЕОБУЕМ ВАШУ ЛАСТОЧКУ <span>ЗА 20 МИНУТ,</span><br/>
                            В ЛЮБОМ РАЙОНЕ МОСКВЫ
                        </h1>
                        <p className="branding__desc">
                            Запишитесь без очереди в ближайший к вам автосервис:
                        </p>
                        <button className="branding__btn" onClick={this.openPopupGetIdea.bind(this)}>
                            ЗАПИСАТЬСЯ НА ШИНОМОНТАЖ В УДОБНОЕ ВРЕМЯ
                            <span className="rippleEffect"></span>
                        </button>
                    </div>
                </div>
                <Popup
                    title={'Получить идею подарка'}
                    state={this.state.popupGetIdea}
                    close={this.closePopupGetIdea.bind(this)}
                    type={'email'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormGetIdea.bind(this)}
                />
            </section>
                )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isGetIdeaNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getIdeaSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Branding);