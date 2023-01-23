import React, { useState } from 'react'
import './filterBar.scss'
import { useTranslation } from 'react-i18next'

const FilterBarEvent = ({ onNameFilter, onCareFilter, onDateFilter }: any) => {

    const { t } = useTranslation()

    const [filters, setFilters] = useState({
        desc: "",
        care: "",
        act: "",
        date: ""
    })

    const handleInput = (field: any) => (event: any) => {
        const { value } = event.target

        setFilters({
            ...filters,
            [field]: value,
        })

        switch (field) {
            case "desc":
                onNameFilter(value)
                break
            case "care":
                onCareFilter(value)
                break
            case "date":
                onDateFilter(value, "from")
                break
            default:
                break
        }

    }

    return (
        <div className='filter'>
            <h2>{t('Filtrer par')}</h2>
            <div className='filterby'>
                <div className='control'>
                    <label htmlFor="">Description</label><br />
                    <input type="text" onChange={handleInput("desc")} value={filters.desc} />
                </div>
                <div className='control'>
                    <label htmlFor="">Motif</label><br />
                    <input type="text" onChange={handleInput("care")} />
                </div>
                <div className='control'>
                    <label htmlFor="">date</label><br />
                    <input type="date" onChange={handleInput("date")} />
                </div>
            </div>
        </div>
    )
}

export default FilterBarEvent
