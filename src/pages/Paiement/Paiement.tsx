import React, { useState, useEffect } from 'react'
import { Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEvent } from '../../hooks/Events/useEvent'
import { useTranslation } from 'react-i18next'
import { useForm } from '../../utils/hooks'
import { useMutation, useQuery } from '@apollo/client'
import './paiement.scss'
import { CREATE_INSTANCE } from './PaiementMutation'

const Paiement = () => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  const { eventId } = useParams()

  const { t } = useTranslation()

  const { data: dataI, error: errorI, loading: loadingI } = useEvent(Number(eventId))

  const [updateData, setUpdateData] = useState(dataI)

  useEffect(() => {
    setUpdateData(dataI)
  }, [dataI])


  const actId = updateData?.event?.care?.acts?.map((el: any) => (el?.price?.map((el: any) => el?.value)))

  const care = updateData?.event?.care?.id

  const careDesc = updateData?.event?.care?.description

  const act = updateData?.event?.care?.acts?.map((el: any) => (el.id))

  const actDesc = updateData?.event?.care?.acts?.map((el: any) => (el.description?.fr))

  const [createUpdateInstanceActPrice, { loading, error }] = useMutation(CREATE_INSTANCE)

  const [initialState] = useState({
    careId: care,
    actId: act,
    amountPaid: "",
    amountDue: actId,
    amountRejected: '0',
    userId: "",
    dateAmount: Date,
    payWho: ""
  });

  const { onChange, onChangeOption, onSubmit, values } = useForm(
    formCallback,
    initialState
  );

  async function formCallback() {

    try {
      const valuesCallBack: any = values
      // send "values" to database
      console.log("=================", values)
      createUpdateInstanceActPrice({
        variables: {
          careId: Number(valuesCallBack.careId), actId: Number(valuesCallBack.actId), amountPaid: Number(valuesCallBack.amountPaid), amountDue: Number(valuesCallBack.amountDue),
          amountRejected: Number(valuesCallBack.amountRejected), userId: Number(valuesCallBack.userId), dateAmount: valuesCallBack.dateAmount, payWho: Number(valuesCallBack.payWho)
        }
      })
      navigate(`/detail/paiement/${care}`)
    }
    catch (error: any) {
      if (error) return `
            Erreur de soumission ! ${error.message}`
    }

  }

  return (
    <div className='home-container'>
      <Outlet />
      <div className='paiement'>
        <h2>{t('paiement')}
          <button className='back' onClick={goBack}>&larr; {t('retour')}</button>
        </h2>

        <div className='regle'>
          <hr /><br />
          <div className='methode'>
            <form onSubmit={onSubmit}>
              <div className='partiel'>
                <div className='partiel1'>
                  <h4>{t('motif')}</h4>
                  <input type='text' value={careDesc} name="careId" onChange={onChange} placeholder={`${care}`} required />
                  <h4>{t('acte')}</h4>
                  <input type='text' value={actDesc} name="actId" onChange={onChange} placeholder={`${act}`} required />
                  <h4>{t('montantPayer')}</h4>
                  <input type="text" name="amountPaid" onChange={onChange} placeholder='' required />
                  <h4>{t('montantDu')}</h4>
                  <input type="text" value={actId} name="amountDue" onChange={onChange} placeholder={`${actId}`} required />
                </div>
                <div className='partiel1'>
                  <div className='hidden'>
                    <h4>{t('montantRej')}</h4>
                    <input type="text" name="amountRejected" onChange={onChange} placeholder='0' />
                  </div>
                  <h4>{t('user')}</h4>
                  <input type="text" name="userId" onChange={onChange} placeholder='' required />
                  <h4>{t('datePay')}</h4>
                  <input type="datetime-local" name="dateAmount" onChange={onChange} placeholder='' required />
                  <h4>{t('payerPar')}</h4>
                  <input type="text" name="payWho" onChange={onChange} placeholder='' required />
                </div>
              </div>
              <div className='submit'>
                <button type='submit' className='btn-blue'>{t('valide')}</button>
              </div>
            </form>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Paiement
