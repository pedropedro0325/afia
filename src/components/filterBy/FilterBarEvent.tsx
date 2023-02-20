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

    const [showHide, setShowHide] = useState('')

    const handleShowHide = (event: any) => {
        const getFilter = event.target.value
        setShowHide(getFilter)
    }

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
                onDateFilter(value)
                break
            default:
                break
        }

    }

    return (
        <div className='filter'>
            <div className='select'>
                <select name="filter" onChange={(e: any) => (handleShowHide(e))}>
                    <option value="">{t('filtrerPar')}</option>
                    <option value="1">Description</option>
                    <option value="2">Motif</option>
                    <option value="3">Date</option>
                </select>
            </div>
            <div className='filterby'>
                {
                    showHide === '1' && (
                        <div className='control'>
                            <input type="text" onChange={handleInput("desc")} value={filters.desc} placeholder={`${t('searchD')}`} />
                        </div>
                    )
                }
                {
                    showHide === '2' && (
                        <div className='control'>
                            <input type="text" onChange={handleInput("care")} placeholder={`${t('searchM')}`} />
                        </div>
                    )
                }
                {
                    showHide === '3' && (
                        <div className='control'>
                            <input type="date" onChange={handleInput("date")} value={filters.date} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterBarEvent
