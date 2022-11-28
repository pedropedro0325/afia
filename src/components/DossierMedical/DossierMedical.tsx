import React, { useState } from 'react'
import './dossierMedical.scss'

const DossierMedical = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    return (
        <div>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <h4>Allergies</h4>
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <h4>Consultations</h4>
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <h4>Opérations</h4>
                </button>
                <button
                    className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}
                >
                    <h4>...</h4>
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h4>Patient</h4>
                    <hr />
                    <p>...</p>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h4>...</h4>
                    <hr />
                    <p>...</p>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h4>...</h4>
                    <hr />
                    <p>...</p>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}>
                    <h4>...</h4>
                    <hr />
                    <p>...</p>
                </div>
            </div>
        </div>
    )
}

export default DossierMedical
