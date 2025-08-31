import React from 'react'

const ModalComponent = ({show, title, message, onClose}) => {
  return (
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex='-1' role='dialog' style={{backgroundColor : show ? 'rgba(28, 52, 58, 0.5)' : 'transparent'}}>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h3 className={`modal-title w-100 text-center fw-bold ${title === 'success' ? 'text-success' : 'text-danger'}`}>{title}</h3>
                    <button type='button' className='btn-close' onClick={onClose}></button>

                </div>
                <div className='modal-body'>
                    <p>{message}</p>

                </div>
                <div className='modal-footer'>
                        <button type='button' className='btn btn-success' onClick={onClose}>close</button>
                </div>

            </div>

        </div>

    </div>
  )
}

export default ModalComponent