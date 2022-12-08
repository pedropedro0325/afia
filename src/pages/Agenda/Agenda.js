import { Calendar, dateFnsLocalizer, DateLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import { Outlet, Link } from 'react-router-dom'
import { useState, useMemo, useCallback } from 'react'
import './agenda.scss'
import { useEvents } from '../../hooks/Events/useEvents';



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

    const [events, setEvents] = useState([
        {
            id: 0,
            title: 'Board meeting',
            start: new Date(2022, 11, 7, 16, 30, 0),
            end: new Date(2022, 11, 7, 17, 30, 0),
            resourceId: 1,
        },
        {
            id: 1,
            title: 'MS training',
            start: new Date(2022, 11, 22, 16, 30, 0),
            end: new Date(2022, 11, 22, 17, 30, 0),
            resourceId: 2,
        },
        {
            id: 2,
            title: 'Team lead meeting',
            start: new Date(2022, 11, 7, 17, 30, 0),
            end: new Date(2022, 11, 7, 18, 30, 0),
            resourceId: 3,
        },
        {
            id: 3,
            title: 'Team lead',
            start: new Date(2022, 11, 7, 18, 30, 0),
            end: new Date(2022, 11, 7, 19, 30, 0),
            resourceId: 3,
        },
        {
            id: 4,
            title: 'Birthday Party',
            start: new Date(2022, 11, 12, 21, 30, 0),
            end: new Date(2022, 11, 12, 21, 30, 0),
            resourceId: 4,
        },
    ])

    const [resourceMap, setResourceMap] = useState([
        { resourceId: 1, resourceTitle: 'Board room' },
        { resourceId: 2, resourceTitle: 'Training room' },
        { resourceId: 3, resourceTitle: 'Meeting room 1' },
        { resourceId: 4, resourceTitle: 'Meeting room 2' },
    ])

    const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
        []
    )

    const { error, loading, data } = useEvents()

    const [allEvents, setAllEvents] = useState(data.events)

    console.log('next',allEvents);

    const [culture, setCulture] = useState('fr')
    const [rightToLeft, setRightToLeft] = useState(false)


    const { defaultDate, messages } = useMemo(
        () => ({
            messages: lang[culture],
        }),
        [culture]
    )

    return (
        <div className='home-container'>
            <Outlet />
            <div className='agenda'>
                <div className='agenda-top'>
                    <div className='addEvent'>
                        <h2>L'agenda</h2>
                        <br />
                        <Link to={`/ajouter-un-evenement`}><button className='btn-add'>Ajouter un évènement</button></Link>
                    </div>
                    <div>
                        {/* <div className='filtre'>
                            <select value={resourceMap} onChange={(e) => { setResourceMap(e.target.value) }}>
                                {
                                    resourceMap.map((el) => (
                                        <option key={el.resourceId} value={el.resourceId !== 'clear' ? el.resourceId : ''}>{el.resourceTitle}</option>
                                    ))
                                }
                            </select>
                        </div> */}
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
                        resources={resourceMap}
                        // resourceIdAccessor="resourceId"
                        // resourceTitleAccessor="resourceTitle"
                        onSelectEvent={handleSelectEvent}
                        selectable
                        step={80}
                        rtl={rightToLeft}
                        style={{ height: 500, padding: "10px" }}
                    ></Calendar>
                </div>
            </div>
        </div>
    )
}

export default Agenda
