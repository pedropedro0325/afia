import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { useStatus } from '../../../hooks/Status/useStatus'
import { useTranslation } from 'react-i18next'

const Status = () => {

    const { t } = useTranslation()

    const { data, error, loading } = useStatus()

    const [status, setStatus] = useState<[]>([])

    useEffect(() => {
        setStatus(data?.manyStatus)
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
                <div className='chambre-container'>
                    <h2>{t('listeStatut')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('statut')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/status/ajouter`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                            <button onClick={refreshPage} className='btn-blue'>
                                <FontAwesomeIcon icon={faRefresh} className="i-plus" />
                            </button>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Description Fr</th>
                                    <th>Description En</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    status?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.fr?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.description.fr}</td>
                                            <td>{el.description.en}</td>
                                            <td><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button></td>
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

export default Status
