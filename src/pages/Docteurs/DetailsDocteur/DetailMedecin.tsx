import { Outlet, useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import './detailMedecin.scss'
import { usePersonnel } from '../../../hooks/Personnels/usePersonnel'
import { useEventByPartaker } from '../../../hooks/Events/usePartakerId'
import { useTranslation } from 'react-i18next'

const DetailPatient = () => {

    const { t } = useTranslation()

    const [search, setSearch] = useState('')

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { partakerId } = useParams()

    const { data, loading, error } = useEventByPartaker(Number(partakerId))

    const { data: dataE, loading: loadingE, error: errorE } = usePersonnel(Number(partakerId))

    if (loading) return <div className='err'><div className=' loader'></div><h4>{t('load')}</h4></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div className='home-container'>
            <Outlet />
            <div className='details'>
                <div className='container'>
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <h2>{t('infoPers')}</h2>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <h2>Agenda</h2>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <h2>{t('personne')} N° {partakerId}</h2>
                            <li>Type : <h3>{dataE?.partaker?.partakerType?.description}</h3></li>
                            <hr />
                            <br />
                            <div className='pers'>
                                <div className='part1'>
                                    <ul className='info'>
                                        <div className='class'>
                                            <li>{t('prenom')} : <h5>{dataE?.partaker?.name}</h5></li>
                                            <li>{t('nom')} : <h5>{dataE?.partaker?.lastName}</h5></li>
                                            <li>{t('dateNaiss')} : <h5>{dataE?.partaker?.birthDate}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>{t('lieu')} : <h5>{dataE?.partaker?.birthCityId}</h5></li>
                                            <li>{t('adresse')} : <h5>{dataE?.partaker?.adressId}</h5></li>
                                            <li>{t('tel')} : <h5>{dataE?.partaker?.phoneNumber}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Email : <h5>{dataE?.partaker?.email}</h5></li>
                                        </div>
                                    </ul>
                                </div>
                                <div className='part2'>
                                    <h4>{t('apropos')}</h4>
                                    <p>
                                        {dataE?.partaker?.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h3> {dataE?.partaker?.partakerType?.description}
                                <p className='name'>{dataE?.partaker?.name} {dataE?.partaker?.lastName}</p>
                            </h3>
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
                                        <th>Description</th>
                                        <th>{t('dDateHeure')}</th>
                                        <th>{t('fDateHeure')}</th>
                                        <th>Action</th>
                                    </tr>
                                    {
                                        data?.eventByPartaker?.filter((el: any) => {
                                            return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                        })?.reverse().map((el: any) => (
                                            <tr key={el.id}>
                                                <td>{el.care?.acts?.map((el: any) => (<p key={el.id}>{el.description?.fr}</p>))}</td>
                                                <td>{el.startDate}</td>
                                                <td>{el.endDate}</td>
                                                <td><Link to={`/evenements/detail/${el.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPatient
