import React, { useState, useEffect } from 'react'
import './modal.scss'

const Modal = ({ closeModal }: any, { allEvents }: any) => {

    const [event, setEvent] = useState<[]>([])

    return (
        <div className='modal'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h2>{allEvents?.description}</h2>
                </div>
                <div className='body'>
                    <p>
                        lorem ipsum
                    </p>
                </div>
                <div className='footer'>
                    <button className='cancelBtn'>Annuler</button>
                    <button>Mettre à jour</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
