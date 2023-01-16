import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './medecin.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { useMedecins } from '../../../hooks/medecins/useMedecins'
import { useTranslation } from 'react-i18next'

const Medecin = () => {

    const { t } = useTranslation()

    const { error, loading, data } = useMedecins()

    const [medecins, setMedecins] = useState<[]>([])

    useEffect(() => {
        setMedecins(data?.partakers)
    }, [data])

    const [search, setSearch] = useState<string>('')

    function refreshPage() {
        window.location.reload();
    }

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>something went wrong</div>
    return (
        <div>
            <div className='home-container'>
                <Outlet />
                <div className='medecin-container'>
                    <h2>{t('listeMedecin')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('medecin')}</h4>
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
                            <button className='back'><Link to='/'>Retour</Link></button>
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
                                    medecins?.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el.name?.toLowerCase().includes(search)
                                    }).filter((curDate: any) => {
                                        return curDate.partakerType?.id === '0'
                                    }).map((medecin: any) => (
                                        <tr key={medecin.id}>
                                            <td>{medecin.name}</td>
                                            <td>{medecin.lastName}</td>
                                            <td>{medecin.email}</td>
                                            <td><Link to={`/personnels/detail/${medecin.id}`}><button className='btn-blue'>{t('voir')}</button></Link></td>
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

export default Medecin
