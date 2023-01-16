import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import './types.scss'
import { useTypes } from '../../../hooks/Types/useTypes'
import { useTranslation } from 'react-i18next'

const Types = () => {

    const { t } = useTranslation()

    const { data, loading, error } = useTypes()

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
                <div className='types-container'>
                    <h2>{t('listePoste')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('poste')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/postes/ajouter`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link>
                            <button onClick={refreshPage} className='btn-blue'>
                                <FontAwesomeIcon icon={faRefresh} className="i-plus" />
                            </button>
                            <button className='back'><Link to='/'>Retour</Link></button>
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>N°</th>
                                    <th>Description</th>
                                    <th>{t('statut')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.partakerTypes.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description?.toLowerCase().includes(search)
                                    }).map((type: any) => (
                                        <tr key={type.id}>
                                            <td>{type.id}</td>
                                            <td>{type.description}</td>
                                            <td><button className='btn-statut'>Active</button></td>
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

export default Types
