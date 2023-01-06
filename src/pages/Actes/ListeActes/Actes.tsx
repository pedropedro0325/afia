import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './actes.scss'
import { useActes } from '../../../hooks/Actes/useActes'
import { useTranslation } from 'react-i18next'

const Actes = () => {

    const { t } = useTranslation()

    const { data, loading, error } = useActes()

    const [actes, setActes] = useState<[]>([])

    useEffect(() => {
        setActes(data?.acts)
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
                <div className='acte-container'>
                    <h2>{t('listeActe')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('actes')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/actes/ajouter`}>
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
                                    <th>Description Fr</th>
                                    <th>{t('specialites')}</th>
                                    <th>{t('prix1')}</th>
                                    <th>{t('prix2')}</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    actes?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.fr?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el.id}>
                                            <td>{el.description.fr}</td>
                                            <td>{el.specialities?.map((el: any) => (el?.description?.fr))}</td>
                                            <td>{el.price?.map((el: any) => (el.value))}</td>
                                            <td>{el.price?.map((el: any) => (el.partakerIds))}</td>
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

export default Actes
