import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from 'react-datepicker'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'
import './agenda.scss'

const locales = {
    "FR": require("date-fns/locale/FR")
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
        title: "Rééducation",
        allDay: true,
        start: new Date(2022, 10, 2),
        end: new Date(2022, 10, 2)
    },
    {
        title: "Consultation",
        start: new Date(2022, 10, 22),
        end: new Date(2022, 10, 22)
    },
    {
        title: "Conférence",
        start: new Date(2022, 10, 20),
        end: new Date(2022, 10, 20)
    }
]

const Agenda = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

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
                        startAccessor="start" endAccessor="end"
                        style={{ height: 500, padding: "10px" }}
                    ><Link>link</Link></Calendar>
                </div>
            </div>
        </div>
    )
}

export default Agenda
