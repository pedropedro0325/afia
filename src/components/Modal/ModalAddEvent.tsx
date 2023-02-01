import React, { useState, useEffect } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom';
import { GET_STATUS } from '../../hooks/Status/useStatus';
import { GET_PATIENTS } from '../../hooks/Patients/usePatients';
import { GET_PERSONNELS } from '../../hooks/Personnels/usePersonnels';
import { GET_VENUES } from '../../hooks/Venues/useVenues';
import { GET_ACTS } from '../../hooks/Actes/useActes';
import { useForm } from '../../utils/hooks';
import './modalAddEvent.scss'
import { useTranslation } from 'react-i18next'
import { CREATE_EVENT } from '../../pages/Events/AjouterEvent/EventMutation';
import { GET_EVENTS } from '../../hooks/Events/useEvents';

interface ModalProps {
  closeModalAdd: any;
}

const ModalAddEvent: React.FC<ModalProps> = ({ closeModalAdd }) => {

  const navigate = useNavigate()

  const { t } = useTranslation()

  const [careDescription, setCareDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [statusId, setStatusId] = useState('')
  const [description, setDescription] = useState('')
  const [patientId, setPatientId] = useState('')
  const [partakerIds, setPartakerIds] = useState('')
  const [venueId, setVenueId] = useState('')
  const [actIds, setActIds] = useState('')

  const [createEvent] = useMutation(CREATE_EVENT, {
    variables: {
      description, careDescription, startDate, endDate, statusId: Number(statusId), patientId: Number(patientId), partakerIds: Number([]), venueId: Number(venueId), actIds: Number([])
    },
    update(cache, { data: { createEvent } }) {
      const { events }: any = cache.readQuery({ query: GET_EVENTS })

      cache.writeQuery({
        query: GET_EVENTS,
        data: { events: [...events, createEvent] },
      })
    }
  })

  const onSubmit = (e: any) => {
    e.preventDefault()

    if (description === '' || careDescription === '' || startDate === '' || endDate === '' || statusId === '' || patientId === '' || partakerIds === '' || venueId === '' || actIds === '') {
      return alert('Merci de remplir tous les champs');
    }

    createEvent({ description, careDescription, startDate, endDate, statusId, patientId, partakerIds, venueId, actIds } as any)
    navigate('/calendrier')
    closeModalAdd(false)
    setDescription('')
    setStartDate('')
    setEndDate('')
    setStatusId('')
    setCareDescription('')
    setPartakerIds('')
    setPatientId('')
    setActIds('')
    setVenueId('')
  }

  const { data: dataStatus } = useQuery(GET_STATUS)
  const [statuts, setStatuts] = useState<[]>([])

  useEffect(() => {
    setStatuts(dataStatus?.manyStatus)

  }, [dataStatus])

  const { data: dataPat } = useQuery(GET_PATIENTS)
  const [patients, setPatients] = useState<[]>([])

  useEffect(() => {
    setPatients(dataPat?.patients)

  }, [dataPat])

  const { data: dataPer } = useQuery(GET_PERSONNELS)
  const [personnels, setPersonnels] = useState<[]>([])

  useEffect(() => {
    setPersonnels(dataPer?.partakers)
  }, [dataPer])

  const { data: dataA } = useQuery(GET_ACTS)
  const [actes, setActes] = useState<[]>([])

  useEffect(() => {
    setActes(dataA?.acts)
  }, [dataA])

  const { data: dataV } = useQuery(GET_VENUES)
  const [venues, setVenues] = useState<[]>([])

  useEffect(() => {
    setVenues(dataV?.venues)
  }, [dataV])

  return (
    <div>
      <div className='modalAdd'>
        <div className='modalContainer'>
          <div className='titleCloseBtn'>
            <button onClick={() => closeModalAdd(false)}>X</button>
          </div>
          <div className='title'>
            <h2>{t('ajouterEv')}</h2>
          </div><br />
          <div className='body'>
            <div className='form'>
              <form onSubmit={onSubmit}>
                <div className='controls'>
                  <div>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='input' placeholder='Description*' required />
                  </div>
                </div>
                <div className='controls'>
                  <div>
                    <input value={careDescription} onChange={(e) => setCareDescription(e.target.value)} type="text" className='input' placeholder='Description de la maladie' required />
                  </div>
                </div>
                <div className='control'>
                  <div>
                    <label htmlFor="">{t('dateD')}*</label><br />
                    <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="datetime-local" className='input' placeholder='Date du début*' required />
                  </div><br />
                  <div>
                    <label htmlFor="">{t('dateF')}*</label><br />
                    <input value={endDate} onChange={(e) => setEndDate(e.target.value)} type="datetime-local" className='input' placeholder='Date de fin*' required />
                  </div>
                </div>
                <div className='control'>
                  <div>
                    <select value={patientId} onChange={(e) => setPatientId(e.target.value)} id="" className='input' required>
                      <option value="">Patient</option>
                      {
                        patients?.map((el: any) => (
                          <option key={el.id} value={el.id}>{el.name}</option>
                        ))
                      }
                    </select>
                  </div><br />
                  <div>
                    <select value={partakerIds} onChange={(e) => setPartakerIds(e.target.value)} id="" className='input' required>
                      <option value="">{t('personnel')}</option>
                      {
                        personnels?.map((el: any) => (
                          <option key={el.id} value={el.id}>{el.name}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div className='control'>
                  <div>
                    <select value={venueId} onChange={(e) => setVenueId(e.target.value)} id="venueId" className='input' required>
                      <option value="">{t('chambre')}</option>
                      {
                        venues?.map((el: any) => (
                          <option key={el.id} value={el.id}>{el.description} ( {el.venueType.description} )</option>
                        ))
                      }
                    </select>
                  </div><br />
                  <div>
                    <select value={actIds} onChange={(e) => setActIds(e.target.value)} id="actIds" className='input' required>
                      <option value="">{t('acte')}</option>
                      {
                        actes?.map((el: any) => (
                          <option key={el.id} value={el.id}>{el.description.fr}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div className='control'>
                  <div>
                    <select value={statusId} onChange={(e) => setStatusId(e.target.value)} className='input' placeholder='' required>
                      <option value="">{t('statut')}</option>
                      {
                        statuts?.map((el: any) => (
                          <option key={el.id} value={el.id}>{el.description.fr}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <div className='save'>
                  <div>
                    <button type='submit' className='btn-save'>{t('save')}</button>
                  </div>
                  <div>
                    <button className='btn-cancel'>{t('annuler')}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAddEvent
