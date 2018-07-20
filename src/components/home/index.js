import React, { Component } from 'react';
import {connect} from 'react-redux';
import {triggerModal, clearModal} from '../../actions/';
import FirstTimeModal from '../modals/firstTimeModal';
import Carousel from '../carousel';
import GeneralText from '../multiuse/generaltext';
import types from "../../actions/types";

class HomePage extends Component {
    state = {
        genText: 'Welcome to Games Ferret!'
    }

    componentWillMount() {
        const getUserNameFromStorage = window.localStorage.getItem('username');
        if(getUserNameFromStorage) {
            this.setState({
                genText: `Welcome ${getUserNameFromStorage}` //browser
            });
        }
    }
    componentDidMount() {
        const isNotFirstTimeVisit = window.localStorage.getItem('notfirstimer');
        //console.log(isNotFirstTimeVisit, 'woo you must love ferrets');
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
        const {genText} = this.state;
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
