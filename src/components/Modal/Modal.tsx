import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './modal.scss'
import { useTranslation } from 'react-i18next'

interface ModalProps {
    closeModal: any;
    selectedEvent: any;
}


const Modal: React.FC<ModalProps> = ({ closeModal, selectedEvent }) => {

    const { t } = useTranslation()

    useEffect(() => {
        console.log(selectedEvent);
    }, [])



    return (
        <div className='modal'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h2>{selectedEvent?.description}</h2>
                </div>
                {/* <div className='body'>
                    <p></p>
                </div> */}
                <div className='footer'>
                    <button className='cancelBtn'>{t('annuler')}</button>
                    <button>{t('update')}</button>
                    <Link to={`/evenements/detail/${selectedEvent.id}`}><button className='see'>{t('voir')}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Modal
