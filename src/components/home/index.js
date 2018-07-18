import React, { Component } from 'react';
import {connect} from 'react-redux';
import {triggerModal, clearModal} from '../../actions/';
import FirstTimeModal from '../modals/firstTimeModal';
import Carousel from '../carousel';
import GeneralText from '../multiuse/generaltext';


class HomePage extends Component {
    componentDidMount() {
        const isNotFirstTimeVisit = window.localStorage.getItem('notfirstimer');
        console.log(isNotFirstTimeVisit, 'woo you must love ferrets');
        if(!isNotFirstTimeVisit) {
            this.props.triggerModal('hello')
            window.localStorage.setItem('notfirstimer', true);
        }
    }
    handleModalClose() {
        this.props.clearModal();
    }
    render() {
        const {modal: {firstModal }} = this.props;
        const genText = 'Welcome to GamesFerret!'
        return (
            <div className="homePageContainer">
                <FirstTimeModal parentComponent={genText} content={firstModal} handleClose={() => this.handleModalClose()} />
                <GeneralText text={genText}/>
                <Carousel/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    modal: state.modal
});
export default connect(mapStateToProps,{ triggerModal, clearModal })(HomePage);
