import React from 'react';

  export default ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button className='detailsButton'>View Game Details</button>
          <button className='detailsButton' onClick={handleClose}>Continue Browsing</button>
        </section>
      </div>
    );
  };