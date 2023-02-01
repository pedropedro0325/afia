import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './dossierMedical.scss'
import { GET_EVENTS } from '../../hooks/Events/useEvents';
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client';
const Day = require('dayjs')

const DossierMedical = ({ data }: any) => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [toggleState, setToggleState] = useState(3);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { data: dataE, loading, error } = useQuery(GET_EVENTS)

    const [search, setSearch] = useState('')

    return (
        <div>
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    <h4>{t('allergie')}</h4>
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    <h4>{t('infos')}</h4>
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    <h4>{t('antecedent')}</h4>
                </button>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}>
                    <ul className='desc'>
                        <button className='back' onClick={goBack}>Retour</button>
                        <li>
                            <h4>{data.patient.name} {data.patient.lastName}</h4>
                            <hr />
                            <br />
                            <h5>{t('allergie')}</h5>
                            <p>_ Aux arrachides</p>
                        </li>
                        <li>
                            <h5>{t('dClinique')}</h5>
                            <p>_ Immuno-déprimé</p>
                            <p>_ Insuffisance hépatique</p>
                            <p>_ Corps étrangers métaliques</p>
                        </li>
                    </ul>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}>
                    <button className='back' onClick={goBack}>Retour</button>
                    <h4>04/06/2022</h4>
                    <hr />
                    <h4>{t('evalu')}</h4>
                    <ul className='desc'>
                        <li>
                            <h5>{t('generalite')}</h5>
                            <p>_Date d'entrée dans l'unité : le 04/06/2022</p>
                            <p>_Motif d'hospitalisation : hta et depression(trouble bipolaire) depuis 15 ans</p>
                        </li>
                        <li>
                            <h5>Transfer</h5>
                            <p>_Vestiaire : Non</p>
                        </li>
                        <li>
                            <h5>{t('respi')}</h5>
                            <p>_Respiration : Normal</p>
                            <p>_Oxygène : Non</p>
                            <p>_Aspiration : Non</p>
                            <p>_Trachéotomie : Non</p>
                        </li>
                        <li>
                            <h5>Nutrition</h5>
                            <p>_Appareil dentair</p>
                            <p>_Autonomie alimentation</p>
                            <p>_Poids (Kg) : 63</p>
                            <p>_Taille : (m) : 1,67</p>
                        </li>
                        <li>
                            <h5>{t('hCorps')}</h5>
                            <p>_Etat cutané : Peau saine</p>
                        </li>
                    </ul>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h4>{data.patient.name} {data.patient.lastName}</h4>
                    <button className='back' onClick={goBack}>Retour</button>
                    <br />
                    <h4>{t('antecedent')}</h4>
                    <hr />
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('event')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Description</th>
                                <th>{t('acte')}</th>
                                <th></th>
                            </tr>
                            {
                                dataE?.events?.filter((el: any) => {
                                    return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                }).filter((curDate: any) => {
                                    return curDate?.care.patient?.id === data?.patient.id
                                })?.reverse().map((el: any) => (
                                    <tr key={el.id}>
                                        <td>{Day(el?.startDate).format("DD - MM - YYYY")}</td>
                                        <td>{el?.care?.description}</td>
                                        <td>{el?.care?.acts?.map((el: any) => (<p key={el.id}>{el?.description?.fr}</p>))}</td>
                                        <td><Link to={`/evenements/detail/${el.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DossierMedical
