import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRefresh } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { GET_CARES } from '../../../hooks/Cares/useCares'
import './facturation.scss'
import { useTranslation } from 'react-i18next'
import FilterBar from '../../../components/filterBy/FilterBar'
import { useQuery } from '@apollo/client'

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter")
dayjs.extend(isSameOrAfter)

const Day = require('dayjs')

const ListeFacturations = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { t } = useTranslation()

    const [facture, setFacture] = useState<[]>([])

    const { data, error, loading } = useQuery(GET_CARES)

    useEffect(() => {
        setFacture(data?.cares)

    }, [data])

    const handleFilterNamne = (name: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            const fullName = `${el?.patient?.name} ${el?.patient?.lastName}`
            if (fullName?.toLowerCase().includes(name?.toLowerCase())) {
                return el
            }
        })
        setFacture(filteredData)
    }

    const handleFilterDoc = (name: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            const fullName = `${el?.partakers?.map((el: any) => el?.name)} ${el?.partakers?.map((el: any) => el?.name)}`
            if (fullName?.toLowerCase().includes(name?.toLowerCase())) {
                return el
            }
        })
        setFacture(filteredData)
    }

    const handleFilterCare = (care: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            if (el?.description.toLowerCase().includes(care?.toLowerCase())) {
                return el
            }
        })
        setFacture(filteredData)
    }

    const handleFilterAct = (act: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            const fullAct = `${el?.acts?.map((el: any) => el?.description?.fr)}`
            if (fullAct?.toLowerCase().includes(act?.toLowerCase())) {
                return el
            }
        })
        setFacture(filteredData)
    }

    const handleFilterDate = (date: any, field: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            const DatePaie = el?.acts?.map((el: any) => el?.lastInstanceActPrices?.dateAmount)
            if (field === "from" && dayjs(DatePaie).isAfter(dayjs(date))) {
                return el
            }
        })
        setFacture(filteredData)
    }

    const handleFilterAmount = (paie: any) => {
        const filteredData = data?.cares?.filter((el: any) => {
            const Paie = `${el?.acts?.map((el: any) => el?.lastInstanceActPrices?.amountPaid)}`
            if (Paie?.toLowerCase().includes(paie?.toLowerCase())) {
                return el
            }
        })
        setFacture(filteredData)
    }

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
                            <button onClick={refreshPage} className='btn-blue'>
                                <FontAwesomeIcon icon={faRefresh} className="i-plus" />
                            </button>
                            <button className='back' onClick={goBack}>{t('retour')}</button>
                        </div>
                        <div>
                            <FilterBar onNameFilter={handleFilterNamne} onDocFilter={handleFilterDoc} onEmailFilter={handleFilterCare} onActFilter={handleFilterAct} onAmountFilter={handleFilterAmount} onDateFilter={handleFilterDate} />
                        </div>
                    </div>
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('motif')}</th>
                                    <th>{t('nomPatient')}</th>
                                    <th>{t('acte')}</th>
                                    <th>{t('nomMed')}</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    facture?.map((el: any) => (
                                        <tr key={el?.id}>
                                            <td>{el?.description}</td>
                                            <td>{el?.patient?.name}</td>
                                            <td>{el?.acts?.map((el: any) => el?.description?.fr)}</td>
                                            <td>{el?.partakers?.map((el: any) => el?.name)}</td>
                                            <td>{el?.acts?.map((el: any) => Day(el?.lastInstanceActPrices?.dateAmount).format("DD / MM / YYYY"))}</td>
                                            <td>{el?.acts?.map((el: any) => el?.lastInstanceActPrices?.amountPaid)} $</td>
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
