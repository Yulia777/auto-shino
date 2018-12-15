import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getIdeaSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Branding extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupGetIdea: false,
            popupKnow: false
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
        yaCounter21935674.reachGoal('zabronirovat-dom-submit');
    }
    openPopupGetIdea() {
        this.setState({popupGetIdea: true});
        yaCounter21935674.reachGoal('zabronirovat-dom-form');
    }
    closePopupGetIdea() {
        this.setState({popupGetIdea: false});
        this.props.getIdeaSuccess(false);
    }

    openPopupKnow() {
        this.setState({popupKnow: true});
    }
    closePopupKnow() {
        this.setState({popupKnow: false});
    }

    render() {
        return(
            <section className="branding">
                <div className="container branding__wrap">
                    <div className="branding__item">
                        <div className="branding--logo">
                            <div className="branding--logo__item">
                                <h1 className="branding__title">
                                    КУПИ СЕЙЧАС,<br/>
                                    ПОСТРОЙ ВЕСНОЙ
                                </h1>
                            </div>
                            <div className="branding--logo__item">
                                <div className="square"></div>
                            </div>
                        </div>
                    </div>
                    <div className="branding__item">
                        <p className="branding__desc">
                            Всё дорожает... К сожалению, и мы не в силах сдерживать рост цен.
                        </p>
                        <p className="branding__desc">
                            В связи с повышением <span>НДС с 1 января 2019 г.,</span> повышаются цены на стройматериалы
                            на <span>15%.</span>
                        </p>
                    </div>
                </div>
                <div className="order">
                    <h2 className="order__title">
                        УСПЕЙТЕ ЗАБРОНИРОВАТЬ ДОМ<br/>
                        ИЗ КЛЕЁННОГО БРУСА <span>ПО ЦЕНАМ 2018 г.</span>
                    </h2>
                    <button className="branding__btn" onClick={this.openPopupGetIdea.bind(this)}>
                        <p>
                            <FontAwesomeIcon icon="check" />
                        </p>
                        <p>
                            ЗАБРОНИРОВАТЬ ДОМ ПО ЦЕНЕ 2018 г.
                        </p>
                    </button>
                    <p onClick={this.openPopupKnow.bind(this)} className="order__link">
                        УЗНАТЬ ПОДРОБНЕЕ
                    </p>
                </div>
                <Popup
                    title={'Забронировать дом по цене 2018г'}
                    state={this.state.popupGetIdea}
                    close={this.closePopupGetIdea.bind(this)}
                    type={'email'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormGetIdea.bind(this)}
                />
                <Popup
                    state={this.state.popupKnow}
                    close={this.closePopupKnow.bind(this)}
                    type={'know'}
                    notification={this.props.isNotification}
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