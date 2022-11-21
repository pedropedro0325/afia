import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css"
// import DatePicker from 'react-datepicker';
import { Outlet } from 'react-router-dom'
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
        start: new Date(2022, 10, 10),
        end: new Date(2022, 10, 10)
    },
    {
        title: "Conférence",
        start: new Date(2022, 10, 20),
        end: new Date(2022, 10, 20)
    }
]

const Agenda = () => {
    return (
        <div className='home-container'>
            <Outlet />
            <div className='agenda'>
                <h1>Consultez l'agenda de la clinique</h1>
                <div className='filtre'>
                    <select name="" id="">
                        <option value="">Médecins</option>
                        <option value="">Salles d'opérations</option>
                        <option value="">Chambres</option>
                    </select>
                </div>
                <div className='calendrier'>
                    <Calendar localizer={localizer} events={events}
                        startAccessor="start" endAccessor="end"
                        style={{ height: 500, margin: "10px" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Agenda
