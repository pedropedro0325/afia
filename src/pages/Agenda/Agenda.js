import { Calendar, dateFnsLocalizer, DateLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import { Outlet, Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
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

const events = [
    {
        description: "Réunion",
        startDate: new Date(2022, 11, 3),
        endDate: new Date(2022, 11, 4)
    },
    {
        description: "Vacance",
        startDate: new Date(2022, 11, 10),
        endDate: new Date(2022, 11, 12)
    },
    {
        description: "Conférence",
        startDate: new Date(2022, 11, 20),
        endDate: new Date(2022, 11, 21)
    }
]

const Agenda = () => {

    const { error, loading, data } = useEvents()

    const [allEvents, setAllEvents] = useState(data.events)

    console.log(allEvents);

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
                    {/* <div>
                        <h3>Consultez l'agenda de la clinique</h3>
                        <div className='filtre'>
                            <select name="" id="">
                                <option value="">Médecins</option>
                                <option value="">Salles d'opérations</option>
                                <option value="">Chambres</option>
                            </select>
                        </div>
                    </div> */}
                    <div className='addEvent'>
                        <h2>L'agenda</h2>
                        <br />
                        <Link to={`/ajouter-un-evenement`}><button className='btn-add'>Ajouter un évènement</button></Link>
                    </div>
                </div>
                <div className='calendrier'>
                    <Calendar localizer={localizer} events={allEvents}
                        culture={culture}
                        messages={messages}
                        defaultDate={defaultDate}
                        DatePicker
                        rtl={rightToLeft}
                        titleAccessor="description"
                        startAccessor="startDate" endAccessor="endDate"
                        style={{ height: 500, padding: "10px" }}
                    ></Calendar>
                </div>
            </div>
        </div>
    )
}

export default Agenda
