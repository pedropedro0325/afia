import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './listePersonnel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { usePersonnels } from '../../../hooks/Personnels/usePersonnels'
import { useTranslation } from 'react-i18next'

const ListePersonnel = () => {

    const { t } = useTranslation()

    const { error, loading, data } = usePersonnels()

    const [personnels, setPersonnels] = useState<[]>([])

    useEffect(() => {
        setPersonnels(data?.partakers)

    }, [data])


    const [search, setSearch] = useState('')

    if (loading) return <div className='err loader'></div>
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
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('prenom')}</th>
                                    <th>{t('nom')}</th>
                                    <th>Email</th>
                                    <th>{t('type')}</th>
                                    <th>Description</th>
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
                                            <td>{el.partakerType.description}</td>
                                            <td>{el.description}</td>
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
