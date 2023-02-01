import React, { useState, useEffect } from 'react'
import { Outlet, useParams, Link, useNavigate } from 'react-router-dom'
import './detailsFacture.scss'
import { useCare } from '../../../hooks/Cares/useCare'
import { useTranslation } from 'react-i18next'
import DownloadButton from '../../../components/buttonDownload/DownloadButton'
const Day = require('dayjs')

const DetailsFacture = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    };

    const { careId } = useParams()

    const { t } = useTranslation()

    const { data, error, loading } = useCare(Number(careId))

    if (loading) return <div className='err'><div className=' loader'></div></div>
    if (error) return <div className='err'>{t('err')}</div>

    return (
        <div className='home-container'>
            <Outlet />
            <div className='details'>
                <h2>{t('bill')}
                    <button className='back' onClick={goBack}>{t('retour')}</button>
                </h2>
                <DownloadButton rootElementId="pageDownload" downloadFileName="Facture" />
                <div className='facture' id='pageDownload'>
                    <div className='num'>
                        <div className='seq'>
                            <h3>{t('bill')} n° :</h3>
                            <h3>{data?.care?.acts?.map((el: any) => el?.lastInstanceActPrices?.seqNumber)}</h3>
                        </div>
                    </div><hr />
                    <div className='infos'>
                        <div className='clinique'>
                            <h1 className='logo'>Afia</h1>
                        </div>
                        <div className='patient'>
                            <h4>{t('billFor')} :</h4>
                            <h5>{data?.care?.patient?.name} {data?.care?.patient?.lastName}</h5>
                            <h5>{data?.care?.patient?.email}</h5>
                            <h5>{data?.care?.patient?.phoneNumber}</h5>
                            <h4>{t('adresse')} :</h4>
                            <h5>{data?.care?.patient?.adressId} {data?.care?.patient?.birthCityId}</h5>
                            <div className='pCare'>
                                <h4>{t('datePay')} :</h4>
                                <h5>{data?.care?.acts?.map((el: any) => Day(el?.lastInstanceActPrices?.dateAmount).format("DD / MM / YYYY"))}</h5>
                            </div>
                        </div>
                    </div><hr />
                    <div className='table-patient'>
                        <table>
                            <thead>
                                <tr>
                                    <th>{t('motif')}</th>
                                    <th>{t('acte')}</th>
                                    <th>{t('prixActe')}</th>
                                    <th>{t('medecin')}</th>
                                    <th>{t('montantDu')}</th>
                                    <th>{t('montantPayer')}</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={data?.care?.id}>
                                    <td>{data?.care?.description}</td>
                                    <td>{data?.care?.acts?.map((el: any) => el?.description?.fr)}</td>
                                    <td>{data?.care?.acts?.map((el: any) => el?.price?.map((el: any) => el?.value))} $</td>
                                    <td>{data?.care?.partakers?.map((el: any) => el?.name)}</td>
                                    <td>{data?.care.acts?.map((el: any) => el?.lastInstanceActPrices?.amountDue)} $</td>
                                    <td>{data?.care.acts?.map((el: any) => el?.lastInstanceActPrices?.amountPaid)} $</td>
                                    <td>{data?.care.acts?.map((el: any) => el?.lastInstanceActPrices?.amountPaid)} $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsFacture
