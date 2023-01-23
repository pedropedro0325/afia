import React, { useState } from 'react'
import './filterBar.scss'
import { useTranslation } from 'react-i18next'

const FilterBar = ({ onNameFilter, onEmailFilter, onActFilter, onDateFilter }: any) => {

    const { t } = useTranslation()

    const [filters, setFilters] = useState({
        name: "",
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
            case "name":
                onNameFilter(value)
                break
            case "care":
                onEmailFilter(value)
                break
            case "act":
                onActFilter(value)
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
                    <label htmlFor="">Prénom du patient</label><br />
                    <input type="text" onChange={handleInput("name")} value={filters.name} />
                </div>
                <div className='control'>
                    <label htmlFor="">Motif</label><br />
                    <input type="text" onChange={handleInput("care")} />
                </div>
                <div className='control'>
                    <label htmlFor="">Acte</label><br />
                    <input type="text" onChange={handleInput("act")} />
                </div>
                <div className='control'>
                    <label htmlFor="">date</label><br />
                    <input type="date" onChange={handleInput("date")} />
                </div>
            </div>
        </div>
    )
}

export default FilterBar
