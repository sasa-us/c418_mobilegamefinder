import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactStars from 'react-stars';
import ModalBody from './showhide';
import './modal.scss';

class Modal extends Component {
    constructor(props){
        super(props);
    }
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <ModalBody show={this.state.show} handleClose={this.hideModal}>
        <div className="modalContainer">
        <h3>{this.props.name}</h3>
        <div className="modalRow">
            <img className='modalImg' src={this.props.img} alt={this.props.name} />
            <div className="infoColumn">
                <p>{ ((this.props.description).length > 120) ? (((this.props.description).substring(0,60-3)) + '...') : this.props.description }</p>
                <ReactStars count={5} size={24} color2={'#ffd700'} value={this.props.rating} edit={false}/>
                <h4>Price: {this.props.price}</h4>
            </div>
            
        </div>
        
        </div>
        </ModalBody>
        <button className='modal-button' type="button" onClick={this.showModal}>
        <h3>{this.props.name}</h3>
        </button>
      </div>
    );
  }
}
export default Modal;