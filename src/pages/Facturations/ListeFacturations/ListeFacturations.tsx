import React, { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCares } from '../../../hooks/Cares/useCares'
import './facturation.scss'
import { useTranslation } from 'react-i18next'

const ListeFacturations = () => {

    const { t } = useTranslation()

    const [facture, setFacture] = useState<[]>([])

    const { data, error, loading } = useCares()

    useEffect(() => {
        setFacture(data?.cares)

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
                <div className='facturation-container'>
                    <h2>{t('listeFacture')}</h2>
                    <br />
                    <div className='top'>
                        <div className='nav'>
                            <h4>{t('facturation')}</h4>
                            <div className='search'>
                                <input type="search" placeholder='Recherche'
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            {/* <Link to={`/ajouter-un-evenement`}>
                                <button className='btn-blue'>
                                    <FontAwesomeIcon icon={faPlus} className="i-plus" />
                                </button>
                            </Link> */}
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
                                    <th>{t('motif')}</th>
                                    <th>{t('nomPatient')}</th>
                                    <th>{t('acte')}</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    facture.filter((el: any) => {
                                        return search.toLocaleLowerCase() === '' ? el : el?.description?.toLowerCase().includes(search)
                                    }).map((el: any) => (
                                        <tr key={el?.id}>
                                            <td>{el?.description}</td>
                                            <td>{el?.patient?.name}</td>
                                            <td>{el?.acts?.map((el: any) => el?.description?.fr)}</td>
                                            <td>{el.acts?.map((el: any) => el?.lastInstanceActPrices?.dateAmount)}</td>
                                            <td>{el.acts?.map((el: any) => el?.lastInstanceActPrices?.amountDue)} $</td>
                                            <td className='flex'><button className='btn-blue'><FontAwesomeIcon icon={faTrash} className="i-plus" /></button>
                                                <Link to={`/facturation/detail/${el.id}`}><button className='btn-blue'>{t('voir')}</button></Link>
                                            </td>
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

export default ListeFacturations
