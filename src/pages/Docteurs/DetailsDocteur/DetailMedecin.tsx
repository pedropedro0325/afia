import { Outlet, useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import './detailMedecin.scss'
import { usePersonnel } from '../../../hooks/Personnels/usePersonnel'
import { useEvents } from '../../../hooks/Events/useEvents'
import { useTranslation } from 'react-i18next'

const DetailPatient = () => {

    const { t } = useTranslation()

    const [search, setSearch] = useState('')

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: any) => {
        setToggleState(index);
    };

    const { data: dataE, loading: loadingE, error: errorE } = useEvents()

    const { partakerId } = useParams()

    const { data, error, loading } = usePersonnel(Number(partakerId))

    if (loading) return <div className='err loader'></div>
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
                            <li>Type : <h3>{data?.partaker?.partakerType?.description}</h3></li>
                            <hr />
                            <br />
                            <div className='pers'>
                                <div className='part1'>
                                    <ul className='info'>
                                        <div className='class'>
                                            <li>{t('prenom')} : <h5>{data?.partaker?.name}</h5></li>
                                            <li>{t('nom')} : <h5>{data?.partaker?.lastName}</h5></li>
                                            <li>{t('dateNaiss')} : <h5>{data?.partaker?.birthDate}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>{t('lieu')} : <h5>{data?.partaker?.birthCityId}</h5></li>
                                            <li>{t('adresse')} : <h5>{data?.partaker?.adressId}</h5></li>
                                            <li>{t('tel')} : <h5>{data?.partaker?.phoneNumber}</h5></li>
                                        </div>
                                        <div className='class'>
                                            <li>Email : <h5>{data?.partaker?.email}</h5></li>
                                        </div>
                                    </ul>
                                </div>
                                <div className='part2'>
                                    <h4>{t('apropos')}</h4>
                                    <p>
                                        {data?.partaker?.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <h3> {data?.partaker?.partakerType?.description}
                                <p className='name'>{data?.partaker?.name} {data?.partaker?.lastName}</p>
                            </h3>
                            <br />
                            <div className='tops'>
                                <div className='nav'>
                                    <h4>{t('event')}</h4>
                                    <div className='search'>
                                        <input type="search" placeholder='Recherche'
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <table>
                                <tr>
                                    <th>Description</th>
                                    <th>{t('dDateHeure')}</th>
                                    <th>{t('fDateHeure')}</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    dataE?.events?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                    }).filter((curDate: any) => {
                                        return curDate?.care.partaker?.map((el: any) => el?.id) === data?.partaker.id
                                    }).map((el: any) => (
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
    )
}

export default DetailPatient
