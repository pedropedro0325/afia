import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import './listeSpecialites.scss'
import { useSpecialities } from '../../../hooks/Specialities/useSpecialities'
import { useTranslation } from 'react-i18next'

const Specialites = () => {

    const { t } = useTranslation()

    const { data, loading, error } = useSpecialities()
    const [specs, setSpecs] = useState<[]>([])

    useEffect(() => {
        setSpecs(data?.specialities)
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
                <div className='speciality-container'>
                    <h2>{t('listeSpec')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('medSpec')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <Link to={`/specialites/ajouter`}>
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
                                    <th>{t('specMed')} Fr</th>
                                    <th>{t('specMed')} En</th>
                                    <th>{t('statut')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specs?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.description.fr?.toLowerCase().includes(search)
                                    }).map((speciality: any) => (
                                        <tr key={speciality.id}>
                                            <td>{speciality.id}</td>
                                            <td>{speciality.description.fr}</td>
                                            <td>{speciality.description.en}</td>
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

export default Specialites
