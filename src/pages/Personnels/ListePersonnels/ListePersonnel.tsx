import React, { useState, useEffect } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './listePersonnel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { GET_PERSONNELS } from '../../../hooks/Personnels/usePersonnels'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

const ListePersonnel = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const { error, loading, data } = useQuery(GET_PERSONNELS)

    const [personnels, setPersonnels] = useState<[]>([])

    useEffect(() => {
        setPersonnels(data?.partakers)

    }, [data])


    const [search, setSearch] = useState('')

    function refreshPage() {
        window.location.reload();
    }

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='personnel-container'>
                    <h2>{t('listePers')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('personnel')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/personnels/ajouter`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                            <button onClick={refreshPage} className='btn-blue'>
                                <FontAwesomeIcon icon={faRefresh} className="i-plus" />
                            </button>
                            <button className='back' onClick={goBack}>Retour</button>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('prenom')}</th>
                                    <th>{t('nom')}</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    personnels?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.name?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.name}</td>
                                            <td>{el.lastName}</td>
                                            <td>{el.email}</td>
                                            <td><Link to={`/personnels/detail/${el.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListePersonnel
