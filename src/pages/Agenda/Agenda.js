import { Calendar, dateFnsLocalizer, DateLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import { Outlet, Link } from 'react-router-dom'
import { useState, useMemo, useCallback, useEffect } from 'react'
import './agenda.scss'
import { useEvents } from '../../hooks/Events/useEvents';
import Modal from '../../components/Modal/Modal';
import { useTranslation } from 'react-i18next'



const locales = {
    "fr-FR": require('globalize/lib/cultures/globalize.culture.fr')
}

const cultures = ['fr']

const lang = {
    fr: {
        week: 'La semaine',
        work_week: 'Semaine de travail',
        day: 'Jour',
        month: 'Mois',
        previous: 'Antérieur',
        next: 'Prochain',
        today: `Aujourd'hui`,
        agenda: 'Agenda',
        Sunday: 'Lundi',

        showMore: (total) => `+${total} plus`,
    }
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})



// events.unshift('clear')

const Agenda = () => {

    const { t } = useTranslation()

    const { error, loading, data } = useEvents();

    const [allEvents, setAllEvents] = useState([]);

    const [openModal, setOpenModal] = useState(false);

    const [selectedEvent, setSelectedEvent] = useState(null);

    // const handleModal = () => {
    //     setOpenModal(true)
    // }


    useEffect(() => {
        // Runs once, after mounting
        if (data) {
            let eventsMutate = [];
            eventsMutate = data.events?.map((event) => ({
                id: Number(event.id),
                description: event.description,
                startDate: new Date(event.startDate),
                endDate: new Date(event.endDate),

            }));
            setAllEvents(eventsMutate)
        }

    }, [data]);

    console.log('next', allEvents);

    const handleSelectEvent = useCallback(
        (allEvents) => window.alert(allEvents.description),
        []
    )



    const handleModal = ( event) =>{
        console.log("=================selectedEvent", event)
        setSelectedEvent(event)
        setOpenModal(true, event)
    }
    

    const [culture, setCulture] = useState('fr')
    const [rightToLeft, setRightToLeft] = useState(false)


    const { defaultDate, messages } = useMemo(
        () => ({
            messages: lang[culture],
        }),
        [culture]
    )

    if (loading) return <div className='err loader'></div>
    if (error) return <div className='err'>something went wrong</div>

    return (
        <div className='home-container'>
            <Outlet />
            <div className='agenda'>
                <div className='agenda-top'>
                    <div className='addEvent'>
                        <h2>{t('agendas')}</h2>
                        <br />
                        <Link to={`/evenements/ajouter`}><button className='btn-add'>{t('ajouterEv')}</button></Link>
                    </div>
                </div>
                <div className='calendrier'>
                    <Calendar localizer={localizer}
                        events={allEvents}
                        culture={culture}
                        messages={messages}
                        defaultView={Views.MONTH}
                        titleAccessor="description"
                        startAccessor="startDate"
                        endAccessor="endDate"
                        onSelectEvent={handleModal}
                        selectable
                        step={80}
                        rtl={rightToLeft}
                        style={{ height: 500, padding: "10px" }}
                    ></Calendar>
                </div>
                {openModal && <Modal closeModal={setOpenModal} selectedEvent={selectedEvent} />}
            </div>
        </div>
    )
}

export default Agenda
