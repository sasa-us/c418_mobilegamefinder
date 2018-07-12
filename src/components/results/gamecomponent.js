import React, {Component} from 'react';
import ReactStars from 'react-stars'
import '../modals/modal.scss'
import Modal from 'react-modal';
import { runInThisContext } from 'vm';


class GameResult extends Component {
    constructor () {
        super();
        this.state = {
            modalIsOpen: false
          };
        
          this.openModal = this.openModal.bind(this);
          this.afterOpenModal = this.afterOpenModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
    }
  
    
    openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      } 


    render(){
        const ratingChanged = (newRating) => {
        };
        Modal.setAppElement(document.getElementById('root'));
        return (
            <div className="resItem">
                <div onClick={this.openModal}>
                    <img className='resItemImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                    <ReactStars count={5} size={24} color2={'#ffd700'} value={this.props.details.all_rating} edit={false}/>
                    <h3>{this.props.details.app_name}</h3>
                </div>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal} 
                    shouldCloseOnOverlayClick={true} 
                    contentLabel="Game Details Modal"
                    >
                    <div className="modalContainer">
                        <h3>{this.props.details.app_name}</h3>
                        <div className="modalRow">
                            <img className='modalImg' src={this.props.details.icon_url} alt={this.props.details.app_name} />
                            <div className="infoColumn">
                                <p>{ ((this.props.details.description).length > 120) ? (((this.props.details.description).substring(0,60-3)) + '...') : this.props.description }</p>
                                <ReactStars count={5} size={24} color2={'#ffd700'} value={this.props.details.all_rating} edit={false}/>
                                <h4>Price: {this.props.details.price_value}</h4>
                            </div>
                        </div>
                        <div className="modalRow">
                            <button className='detailsButton'>View Game Details</button>
                            <button className='detailsButton' onClick={this.closeModal}>Continue Browsing</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
} 
export default GameResult;