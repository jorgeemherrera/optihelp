import React from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import { IconPlaystationX } from '@tabler/icons';

const Modal = ({ children, title, stateModal, changeModalState }) => {
    return (
        <>
            {
                stateModal ?
                    <section className='overlay'>
                        <div className='modal-container'>
                            <div className='modal-header'>
                                <h3>{title}</h3>
                            </div>
                            <IconPlaystationX id='icon-play-x' onClick={() => changeModalState(false)} />
                            {children}
                        </div>
                    </section>
                    : null
            }

        </>
    )
}

export default Modal;

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    stateModal: PropTypes.bool.isRequired,
    changeModalState: PropTypes.func
}
