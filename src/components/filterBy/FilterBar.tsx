import React, { useState } from 'react'
import './filterBar.scss'
import { useTranslation } from 'react-i18next'

const FilterBar = ({ onNameFilter, onDocFilter, onEmailFilter, onActFilter, onAmountFilter, onDateFilter }: any) => {

    const { t } = useTranslation()

    const [filters, setFilters] = useState({
        name: "",
        doc: "",
        care: "",
        act: "",
        price: Number,
        dateF: "",
        dateT: ""
    })

    const [showHide, setShowHide] = useState('')

    const handleShowHide = (event: any) => {
        const getFilter = event.target.value
        setShowHide(getFilter)
    }

    const [disable, setDisable] = useState([])

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
            case "doc":
                onDocFilter(value)
                break
            case "care":
                onEmailFilter(value)
                break
            case "act":
                onActFilter(value)
                break
            case "price":
                onAmountFilter(value)
                break
            case "dateF":
                onDateFilter(value, "from")
                break
            case "dateT":
                onDateFilter(value, "from")
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
                    <option value="1">{t('nomPatient')}</option>
                    <option value="2">{t('motif')}</option>
                    <option value="3">{t('acte')}</option>
                    <option value="4">Date</option>
                    <option value="5">{t('nomMed')}</option>
                    <option value="6">{t('montant')}</option>
                </select>
            </div>
            <div className='filterby'>
                {
                    showHide === '1' && (
                        <div className='control'>
                            <input type="text" onChange={handleInput("name")} value={filters.name} placeholder={`${t('searchP')}`} />
                        </div>
                    )
                }
                {
                    showHide === '5' && (
                        <div className='control'>
                            <input type="text" onChange={handleInput("doc")} value={filters.doc} placeholder={`${t('searchDoc')}`} />
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
                            <input type='text' onChange={handleInput("act")} placeholder={`${t('searchA')}`} />
                        </div>
                    )
                }
                {
                    showHide === '6' && (
                        <div className='control'>
                            <input type="text" onChange={handleInput("price")} placeholder={`${t('searchMon')}`} />
                        </div>
                    )
                }
                {
                    showHide === '4' && (

                        <div className='control'>
                            <div className='date'>
                                <h5>{t('du')}</h5>
                                <div className='col'>
                                    <input type="date" onChange={handleInput("dateF")} />
                                </div>
                                <h5>{t('au')}</h5>
                                <div className='col'>
                                    <input type="date" onChange={handleInput("dateT")} />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterBar
